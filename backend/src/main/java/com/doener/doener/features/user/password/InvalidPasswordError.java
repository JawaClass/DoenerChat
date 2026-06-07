package com.doener.doener.features.user.registration;

import com.doener.doener.features.user.registration.PasswordValidator.PasswordDeniedResult;
import com.doener.doener.shared.error.DoenerException;

import lombok.Getter;

@Getter
public class InvalidPasswordError extends DoenerException {

    private final PasswordDeniedResult result;

    public InvalidPasswordError(PasswordDeniedResult result) {
        super(result.toString());
        this.result = result;
    }

}
