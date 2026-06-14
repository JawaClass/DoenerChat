package com.doener.doener.config.persistence;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.doener.doener.features.user.User;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Configuration
@EnableJpaAuditing
@AllArgsConstructor
public class PersistenceConfig {

    private final AuditorAwareImpl auditorAwareImpl;

}