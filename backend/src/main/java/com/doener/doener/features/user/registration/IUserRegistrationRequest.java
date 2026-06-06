package com.doener.doener.features.user.registration;

import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserLocalRegistrationRequest;
import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserSocialRegistrationRequest;

import lombok.Builder;
import lombok.Data;

public sealed interface IUserRegistrationRequest permits UserLocalRegistrationRequest, UserSocialRegistrationRequest {

    @Data
    @Builder
    final class UserLocalRegistrationRequest implements IUserRegistrationRequest {

        private final String email;
        private final String name;
        private final String password;
    }

    @Data
    @Builder
    final class UserSocialRegistrationRequest implements IUserRegistrationRequest {

        enum Provider {
            Google, Facebook, Apple
        }

        private final String email;
        private final Provider provider;
    }
}
