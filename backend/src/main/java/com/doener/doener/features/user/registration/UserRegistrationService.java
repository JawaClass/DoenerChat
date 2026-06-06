package com.doener.doener.features.user.registration;

import javax.naming.OperationNotSupportedException;

import org.springframework.stereotype.Service;

import com.doener.doener.features.user.UserService;
import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserLocalRegistrationRequest;
import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserSocialRegistrationRequest;
import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserSocialRegistrationRequest.Provider;
import com.doener.doener.features.user.registration.PasswordValidator.PasswordDeniedResult;
import com.doener.doener.features.user.registration.User.Role;
import com.doener.doener.shared.error.NotImplementedError;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserRegistrationService {

    private final PasswordValidator passwordValidator;
    private final UserPasswordHandler userPasswordHandler;
    private final UserService userService;

    public void registerUser(IUserRegistrationRequest request) {

        if (request instanceof UserLocalRegistrationRequest localRequest) {

            var pwValidationResult = passwordValidator.validate(localRequest.getPassword());
            if (pwValidationResult instanceof PasswordDeniedResult deniedResult) {
                throw new InvalidPasswordError(deniedResult);
            }

            User user = User.builder().name(localRequest.getName()).email(localRequest.getEmail()).role(Role.USER)
                    .build();

            userService.createLocalUserWithPassword(user, localRequest.getPassword());

        } else if (request instanceof UserSocialRegistrationRequest socialRequest) {

            if (socialRequest.getProvider() == Provider.Google) {

            }

            throw new NotImplementedError("Social Login not yet implemented");
        }

        // TODO: register continues

    }
}
