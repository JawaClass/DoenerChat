package com.doener.doener.shared.error;

import lombok.Getter;

@Getter
public class DoenerException extends RuntimeException {

    private final String errorCode;

    public DoenerException(String msg, String errorCode) {
        super(msg);
        this.errorCode = errorCode;
    }

}
