package com.doener.doener.config.email;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final EmailConfig emailConfig;

    private final JavaMailSender emailSender;

    @Async
    public void sendEmail(SimpleMailMessage message) {
        message.setFrom(emailConfig.getEmail());
        emailSender.send(message);
    }




}
