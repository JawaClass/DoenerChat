package com.doener.doener.features.user.social;

import com.doener.doener.shared.error.DoenerException;

import lombok.Getter;

@Getter
public class SocialProviderConflictError extends DoenerException {

    public SocialProviderConflictError(String msg) {
        super(msg, "SOCIAL_CONFLICT");
    }

}
