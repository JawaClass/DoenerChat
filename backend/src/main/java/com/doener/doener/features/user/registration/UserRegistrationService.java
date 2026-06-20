package com.doener.doener.features.user.registration;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.doener.doener.features.user.User;
import com.doener.doener.features.user.User.Role;
import com.doener.doener.features.user.UserService;
import com.doener.doener.features.user.UserServiceFacade;
import com.doener.doener.features.user.password.UserPasswordService;
import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserLocalRegistrationRequest;
import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserSocialRegistrationRequest;
import com.doener.doener.features.user.social.UserSocialProvider;
import com.doener.doener.shared.error.NotImplementedError;
import com.doener.doener.shared.error.UserAlreadyExistsException;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserRegistrationService {

    private final UserService userService;
    private final UserServiceFacade userServiceFacade;
    private final UserPasswordService userPasswordService;

    public User registerUser(IUserRegistrationRequest request) {

        if (request instanceof UserLocalRegistrationRequest localRequest) {

            if (userService.getUserByEmail(localRequest.email()).isPresent()) {
                throw new UserAlreadyExistsException(localRequest.email());
            }
            userPasswordService.validatePassword(localRequest.password());

            User user = User.builder()
                    .name(localRequest.name())
                    .email(localRequest.email())
                    .emailConfirmToken(createEmailConfirmToken())
                    .emailConfirmed(false)
                    .emailConfirmTokenCreateTime(LocalDateTime.now())
                    .role(Role.USER)
                    .build();

            var createdUser = userServiceFacade.createLocalUserWithPassword(user, localRequest.password());

            return createdUser;

        } else if (request instanceof UserSocialRegistrationRequest socialRequest) {

            User user = User.builder().email(socialRequest.email())
                    .role(Role.USER)
                    .build();

            if (socialRequest.provider() == UserSocialProvider.Google) {

            }

            throw new NotImplementedError("Social Login not yet implemented");
        }

        // TODO: register continues

        return null;

    }

    public String createEmailConfirmToken() {
        return "1234";
    }

}
