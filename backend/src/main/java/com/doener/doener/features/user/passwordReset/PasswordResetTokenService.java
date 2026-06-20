package com.doener.doener.features.user.passwordReset;

import java.security.SecureRandom;
import java.time.Instant;
import java.util.Base64;
import java.util.Optional;

import javax.management.InstanceNotFoundException;
import javax.management.RuntimeErrorException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.doener.doener.shared.error.DoenerException;
import com.doener.doener.shared.error.NotAuthorizedException;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Transactional
@Service
@AllArgsConstructor
public class PasswordResetTokenService {

    private static final Logger logger = LoggerFactory.getLogger(PasswordResetTokenService.class);

    private final PasswordResetTokenRepository passwordResetTokenRepository;

    public Optional<PasswordResetToken> getValidatedResetToken(String userToken) {
        var tokenMaybe = passwordResetTokenRepository.findByToken(userToken);
        if (tokenMaybe.isEmpty()) {
            logger.info("verify token failed because no such token exist in database");
            return Optional.empty();
        }

        var token = tokenMaybe.get();

        if (Instant.now().isAfter(token.getExpiresAt())) {
            logger.info("verify token failed because token expired");
            return Optional.empty();
        }
        return Optional.of(token);
    }

    public void deleteTokenById(Long id) {
        passwordResetTokenRepository.deleteById(id);
    }

    public PasswordResetToken generateNewResetToken(String email) {
        var twoHoursInSeconds = 60 * 60 * 2;
        var expiresAt = Instant.now().plusSeconds(twoHoursInSeconds);
        var token = PasswordResetToken.builder().email(email).expiresAt(expiresAt).token(generateRandomToken()).build();

        return passwordResetTokenRepository.save(token);
    }

    private String generateRandomToken() {
        // return "1234";
        byte[] randomBytes = new byte[64]; // 64 bytes = 512 bits of entropy
        new SecureRandom().nextBytes(randomBytes);
        return Base64.getUrlEncoder().withoutPadding().encodeToString(randomBytes);
    }

    public PasswordResetToken findValidTokenOrThrow(String token) {

        var dbToken = getValidatedResetToken(token);

        if (dbToken.isPresent()) {
            return dbToken.get();
        }

        throw new NotAuthorizedException("Token not valid");

    }

}
