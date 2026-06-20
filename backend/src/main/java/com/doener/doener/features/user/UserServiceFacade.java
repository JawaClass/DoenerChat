package com.doener.doener.features.user;

import java.util.Optional;

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
public class UserServiceFacade {

    private static final Logger logger = LoggerFactory.getLogger(UserServiceFacade.class);

    private final UserService userService;
    private final UserPasswordHandler userPasswordHandler;
    private final UserPasswordService userPasswordService;

    public User createLocalUserWithPassword(User user, String password) {
        logger.info("create local user with password: {}", user.getEmail());

        var savedUser = userService.save(user);
        UserPassword userPassword = userPasswordHandler.createForUser(user, password);

        userPasswordService.save(userPassword);
        return savedUser;
    }

}
