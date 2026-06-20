package com.doener.doener.features.user.password;

import com.doener.doener.features.user.password.PasswordValidator.PasswordDeniedResult;
import com.doener.doener.shared.error.DoenerException;

import lombok.Getter;

@Getter
public class InvalidPasswordError extends DoenerException {

    private final PasswordDeniedResult result;

    public InvalidPasswordError(PasswordDeniedResult result) {
        super(result.toString(), "INVALID_PASSWORD");
        this.result = result;
    }

}
