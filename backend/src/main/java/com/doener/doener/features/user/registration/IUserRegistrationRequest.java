package com.doener.doener.features.user.registration;

import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserLocalRegistrationRequest;
import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserSocialRegistrationRequest;
import com.doener.doener.features.user.social.UserSocialProvider;

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

        private final String email;
        private final UserSocialProvider provider;
    }
}
