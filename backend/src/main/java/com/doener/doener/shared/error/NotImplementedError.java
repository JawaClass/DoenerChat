package com.doener.doener.shared.error;

public class NotImplementedError extends DoenerException {

    public NotImplementedError(String msg) {
        super(msg, "NOT_IMPLEMENTED");
    }

}
