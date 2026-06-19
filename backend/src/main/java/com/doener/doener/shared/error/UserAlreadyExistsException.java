package com.doener.doener.shared.error;

public class UserAlreadyExistsException extends DoenerException {

    public UserAlreadyExistsException(String email) {
        super("User with email already exists: %s".formatted(email));
    }

}
