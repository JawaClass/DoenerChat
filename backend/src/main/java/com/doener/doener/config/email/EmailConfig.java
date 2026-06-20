package com.doener.doener.config.email;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Getter;

@Component
@ConfigurationProperties
@Getter
public class EmailConfig {
    @Value("${spring.mail.username}")
    private String email;
}