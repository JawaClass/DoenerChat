package com.doener.doener.features.user.passwordReset;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface PasswordResetTokenRepository extends CrudRepository<PasswordResetToken, Long> {

    public Optional<PasswordResetToken> findByEmail(String email);
    public Optional<PasswordResetToken> findByToken(String token);

}
