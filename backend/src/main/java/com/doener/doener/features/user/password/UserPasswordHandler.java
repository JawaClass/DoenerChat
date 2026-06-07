package com.doener.doener.features.user.registration;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserPasswordHandler {

    private final BCryptPasswordEncoder encoder;

    public String encodePassword(String password) {
        /**
         * resource heavy hash encoding (ca. 1 sec)
         * hashes the given password and returns the hash
         */
        return encoder.encode(password);
    }

    public boolean matches(String passwordClear, String passwordHashed) {
        /**
         * also resouce heavy
         */
        return encoder.matches(passwordClear, passwordHashed);
    }

    public UserPassword createForUser(User user, String rawPassword) {
        return UserPassword.builder()
                .user(user)
                .passwordHashed(encoder.encode(rawPassword))
                .build();
    }
}
