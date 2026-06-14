package com.doener.doener.config.persistence;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.doener.doener.features.user.User;

@Component
public class AuditorAwareImpl implements AuditorAware<User> {

    private static final Logger logger = LoggerFactory.getLogger(AuditorAwareImpl.class);

    @Override
    public Optional<User> getCurrentAuditor() {
        var authCtx = SecurityContextHolder.getContext().getAuthentication();

        if (authCtx != null) {
            logger.info("authCtx is not empty !!!");

        }
        var result = Optional.ofNullable(authCtx)
                .filter(auth -> auth.isAuthenticated())
                .filter(auth -> auth.getPrincipal() instanceof User)
                .map(auth -> (User) auth.getPrincipal());

        return result;
    }
}
