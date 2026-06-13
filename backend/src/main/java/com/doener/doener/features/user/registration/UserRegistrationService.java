package com.doener.doener.features.user.registration;

import org.springframework.stereotype.Service;

import com.doener.doener.features.user.User;
import com.doener.doener.features.user.UserService;
import com.doener.doener.features.user.User.Role;
import com.doener.doener.features.user.password.InvalidPasswordError;
import com.doener.doener.features.user.password.UserPasswordHandler;
import com.doener.doener.features.user.password.PasswordValidator;
import com.doener.doener.features.user.password.PasswordValidator.PasswordDeniedResult;
import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserLocalRegistrationRequest;
import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserSocialRegistrationRequest;
import com.doener.doener.features.user.social.UserSocialProvider;
import com.doener.doener.shared.error.NotImplementedError;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserRegistrationService {

    private final PasswordValidator passwordValidator;
    private final UserPasswordHandler userPasswordHandler;
    private final UserService userService;

    public User registerUser(IUserRegistrationRequest request) {

        if (request instanceof UserLocalRegistrationRequest localRequest) {

            var pwValidationResult = passwordValidator.validate(localRequest.getPassword());
            if (pwValidationResult instanceof PasswordDeniedResult deniedResult) {
                throw new InvalidPasswordError(deniedResult);
            }

            User user = User.builder().name(localRequest.getName()).email(localRequest.getEmail()).role(Role.USER)
                    .build();

            return userService.createLocalUserWithPassword(user, localRequest.getPassword());

        } else if (request instanceof UserSocialRegistrationRequest socialRequest) {

            User user = User.builder().email(socialRequest.getEmail()).role(Role.USER)
                    .build();

            if (socialRequest.getProvider() == UserSocialProvider.Google) {

            }

            throw new NotImplementedError("Social Login not yet implemented");
        }

        // TODO: register continues

        return null;

    }
}
