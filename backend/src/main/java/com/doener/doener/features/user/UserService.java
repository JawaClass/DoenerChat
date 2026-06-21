package com.doener.doener.features.user;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.doener.doener.features.address.Address;
import com.doener.doener.features.user.address.UserAddress;
import com.doener.doener.features.user.address.UserAddressRepository;
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
    private final UserSocialAccountRepository userSocialAccountRepository;
    private final UserAddressRepository userAddressRepository;

    public Iterable<User> getAllUsers() {
        return userRepo.findAll();
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    public Optional<User> findById(Long id) {
        return userRepo.findById(id);
    }

    public User save(User user) {
        return userRepo.save(user);
    }

    public User createSocialUser(User user, UserSocialRegistrationRequest social) {

        var savedUser = save(user);

        addSocial(savedUser, social);

        return savedUser;
    }

    public UserSocialAccount addSocial(User user, UserSocialRegistrationRequest social) {

        var existingProvider = user.getUserSocialAccounts().stream()
                .filter(u -> u.getProvider() == social.provider()).findAny();

        if (existingProvider.isPresent()) {
            throw new SocialProviderConflictError(
                    "Provider %s already exists for this account. UserId: %s".formatted(social.provider(),
                            user.getId()));
        }

        UserSocialAccount socialAcount = UserSocialAccount.builder().provider(social.provider())
                .providerEmail(social.email()).user(user).build();

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
