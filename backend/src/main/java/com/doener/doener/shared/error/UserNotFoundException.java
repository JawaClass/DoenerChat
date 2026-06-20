package com.doener.doener.shared.error;

public class UserNotFoundException extends DoenerException {

    public UserNotFoundException(String email) {
        super("User with email not found: %s".formatted(email), "USER_NOT_FOUND");
    }

}
