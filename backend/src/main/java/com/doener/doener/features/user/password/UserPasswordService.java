package com.doener.doener.features.user.password;

import org.springframework.stereotype.Service;

import com.doener.doener.features.user.User;
import com.doener.doener.features.user.UserService;
import com.doener.doener.features.user.password.PasswordValidator.PasswordDeniedResult;
import com.doener.doener.features.user.passwordReset.PasswordResetTokenService;
import com.doener.doener.shared.error.DoenerException;
import com.doener.doener.shared.error.UserNotFoundException;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Transactional
@Service
@AllArgsConstructor
public class UserPasswordService {

    private final UserPasswordRepository userPasswordRepository;
    private final PasswordValidator passwordValidator;
    private final PasswordResetTokenService passwordResetTokenService;
    private final UserService userService;
    private final UserPasswordHandler userPasswordHandler;

    public UserPassword updatePassword(String newPassword, String resetPasswordToken) {
        var dbToken = passwordResetTokenService.findValidTokenOrThrow(resetPasswordToken);
        var email = dbToken.getEmail();
        var user = userService.getUserByEmail(email).orElseThrow(() -> new UserNotFoundException(email));
        var userPassword = userPasswordRepository.findByUser_Id(user.getId())
                .orElseThrow(() -> new DoenerException("User has no password to reset", "NO_PASSWORD"));

        var newPasswordHashed = userPasswordHandler.encodePassword(newPassword);
        userPassword.setPasswordHashed(newPasswordHashed);
        return userPassword;
    }

    public UserPassword save(UserPassword userPassword) {
        return userPasswordRepository.save(userPassword);
    }

    public boolean existForUser(User user) {
        var pw = userPasswordRepository.findByUser_Id(user.getId());
        return pw.isPresent();
    }

    public void validatePassword(String password) {
        var pwValidationResult = passwordValidator.validate(password);
        if (pwValidationResult instanceof PasswordDeniedResult deniedResult) {
            throw new InvalidPasswordError(deniedResult);
        }
    }

}
