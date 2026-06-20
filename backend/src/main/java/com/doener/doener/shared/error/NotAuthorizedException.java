package com.doener.doener.shared.error;

public class NotAuthorizedException extends DoenerException {

    public NotAuthorizedException(String message) {
        super(message, "NOT_AUTHORIZED");
    }

}
