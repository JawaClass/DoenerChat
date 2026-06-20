package com.doener.doener.features.user.passwordReset;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.doener.doener.features.user.login.UserLoginService.ResetPasswordRequest;
import com.doener.doener.features.user.login.UserLoginService.ResetPasswordVerifyTokenRequest;
import com.doener.doener.features.user.login.UserLoginService.UpdatePasswordRequest;
import com.doener.doener.features.user.password.UserPasswordService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth/password/reset")
public class PasswordResetController {

    private static final Logger logger = LoggerFactory.getLogger(PasswordResetController.class);

    private final UserPasswordResetService userPasswordResetService;

    private final UserPasswordService userPasswordService;

    @PostMapping("/send_reset_email")
    public ResponseEntity<Void> sendResetPasswordEmail(@Valid @RequestBody ResetPasswordRequest resetPasswordRequest) {
        /**
         * send reset link to users email
         */

        logger.info("password reset request: {}", resetPasswordRequest);

        userPasswordResetService.sendResetEmail(resetPasswordRequest.email());

        return ResponseEntity.accepted().build();

    }

    public static record ResetPassword() {
    }

    @PostMapping("/verify")
    public ResponseEntity<Void> resetPassword(@Valid @RequestBody ResetPasswordVerifyTokenRequest request) {
        /*
         * Frontend app calls this endpoint after user clicked reset password link
         * to verify its an valid password request
         * 
         */

        logger.info("reset password link clicked: {}", request);

        var isVerified = userPasswordResetService.verifyResetToken(request);

        if (isVerified) {
            return ResponseEntity.ok().build();

        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @PostMapping("/update")
    public ResponseEntity<Void> updatePassword(@Valid @RequestBody UpdatePasswordRequest request) {
        userPasswordService.updatePassword(request.newPassword(), request.token());
        return ResponseEntity.ok().build();
    }
}
