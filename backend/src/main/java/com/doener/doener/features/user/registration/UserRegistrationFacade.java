package com.doener.doener.features.user.registration;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import com.doener.doener.config.email.EmailService;
import com.doener.doener.features.organization.Organization;
import com.doener.doener.features.organization.OrganizationService;
import com.doener.doener.features.user.User;
import com.doener.doener.features.user.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserRegistrationFacade {

    private final UserRegistrationService registrationService;
    private final EmailService emailService;
    private final OrganizationService organizationService;
    private final UserService userService;

    @Transactional
    public User registerAndSendConfirmationEmail(IUserRegistrationRequest request) {

        User user = registrationService.registerUser(request);

        Organization newOrg = Organization.builder().build();
        newOrg = organizationService.save(newOrg);

        user.setOrganization(newOrg);
        user = userService.save(user);

        sendRegistrationConfirmEmail(user.getEmail(), user.getEmailConfirmToken());

        return user;
    }

    public void sendRegistrationConfirmEmail(String email, String confirmToken) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("DönerChat Account Email bestätigen");
        message.setText(
                "Hi, hier ist der Bestätigungscode für deine Registierung bei DönerChat. %s".formatted(confirmToken));
        emailService.sendEmail(message);

    }

}
