package com.doener.doener.features.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.doener.doener.features.address.Address;
import com.doener.doener.features.user.address.UserAddress;
import com.doener.doener.features.user.address.UserAddressRepository;
import com.doener.doener.features.user.password.UserPassword;
import com.doener.doener.features.user.password.UserPasswordHandler;
import com.doener.doener.features.user.password.UserPasswordService;
import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserSocialRegistrationRequest;
import com.doener.doener.features.user.social.SocialProviderConflictError;
import com.doener.doener.features.user.social.UserSocialAccount;
import com.doener.doener.features.user.social.UserSocialAccountRepository;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    private final UserRepository userRepo;
    private final UserPasswordHandler userPasswordHandler;
    private final UserPasswordService userPasswordService;
    private final UserSocialAccountRepository userSocialAccountRepository;
    private final UserAddressRepository userAddressRepository;

    public Iterable<User> getAllUsers() {
        return userRepo.findAll();
    }

    public User getUserById(Long id) {
        return userRepo.findById(id).orElse(null);
    }

    public User save(User user) {
        return userRepo.save(user);
    }

    public User createLocalUserWithPassword(User user, String password) {

        var savedUser = save(user);
        UserPassword userPassword = userPasswordHandler.createForUser(user, password);

        userPasswordService.save(userPassword);
        return savedUser;
    }

    public User createSocialUser(User user, UserSocialRegistrationRequest social) {

        var savedUser = save(user);

        addSocial(savedUser, social);

        return savedUser;
    }

    public UserSocialAccount addSocial(User user, UserSocialRegistrationRequest social) {

        var existingProvider = user.getUserSocialAccounts().stream()
                .filter(u -> u.getProvider() == social.getProvider()).findAny();

        if (existingProvider.isPresent()) {
            throw new SocialProviderConflictError(
                    "Provider %s already exists for this account. UserId: %s".formatted(social.getProvider(),
                            user.getId()));
        }

        UserSocialAccount socialAcount = UserSocialAccount.builder().provider(social.getProvider())
                .providerEmail(social.getEmail()).user(user).build();

        var savedSocial = userSocialAccountRepository.save(socialAcount);

        return savedSocial;

    }

    public UserAddress addAddress(User user, Address address) {

        logger.info("For user {} add address: {}", user.getEmail(), address);

        var maxOrdering = userAddressRepository.findMaxOrderingByUser(user).orElse(-1);

        UserAddress userAddress = UserAddress.builder()
                .user(user)
                .address(address)
                .ordering(maxOrdering + 1)
                .build();

        return userAddressRepository.save(userAddress);
    }

}
