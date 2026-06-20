package com.doener.doener.features.user.passwordReset;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import com.doener.doener.config.email.EmailService;
import com.doener.doener.features.user.UserService;
import com.doener.doener.features.user.login.UserLoginService.ResetPasswordVerifyTokenRequest;
import com.doener.doener.features.user.password.UserPasswordService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserPasswordResetService {

    private static final Logger logger = LoggerFactory.getLogger(UserPasswordResetService.class);

    private final EmailService emailService;
    private final PasswordResetTokenService passwordResetTokenService;
    private final UserService userService;
    private final UserPasswordService userPasswordService;

    @Value("${app.frontend.base-url}")
    private String frontendBaseUrl;

    @Value("${app.frontend.password-reset-route}")
    private String frontEndPasswordResetRoute;

    public void sendResetEmail(String email) {

        var resetLink = generateResetLink(email);
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("DönerChat Account Passwort zuruecksetzen");
        message.setText(generateEmailText(email, resetLink));
        emailService.sendEmail(message);

    }

    private String generateEmailText(String email, String resetLink) {
        return """
                Hallo %s,
                danke, dass du DoenerChat benutzt.
                Um dein Passwort für die E-Mail-Adresse %s zurückzusetzen, klicke bitte auf den unteren Link und befolge die Anweisungen.
                %s
                Bitte beachte, dass dieser Link 2 Stunden nach dem Erhalt dieser E-Mail ungültig wird. Wenn du dein Passwort nicht innerhalb dieser Zeitspanne zurücksetzen kannst, sende bitte eine erneute Anfrage.
                Sollte es Probleme bei der Anmeldung geben, klicke bitte hier: https://faq-de.doenerchat.com/
                Wir wünschen dir auch weiterhin viel Spaß in unserem Onlineshop.
                Danke schön,
                dein DoenerChat Team
                """
                .formatted(email, email, resetLink);
    }

    private String generateResetLink(String email) {
        var token = passwordResetTokenService.generateNewResetToken(email);
        return frontendBaseUrl + frontEndPasswordResetRoute + "?token=%s".formatted(token.getToken());
    }

    public boolean verifyResetToken(ResetPasswordVerifyTokenRequest request) {

        return passwordResetTokenService.getValidatedResetToken(request.token()).isPresent();
    }

}
