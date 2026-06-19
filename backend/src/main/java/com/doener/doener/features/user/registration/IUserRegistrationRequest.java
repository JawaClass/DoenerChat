package com.doener.doener.features.user.registration;

import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserLocalRegistrationRequest;
import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserSocialRegistrationRequest;
import com.doener.doener.features.user.social.UserSocialProvider;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;

public sealed interface IUserRegistrationRequest permits UserLocalRegistrationRequest, UserSocialRegistrationRequest {

    @Builder
    public static record UserLocalRegistrationRequest(@NotBlank @Email String email, String name, @NotBlank String password) implements IUserRegistrationRequest {

        // private final String email;
        // private final String name;
        // private final String password;
    }
 
    @Builder
    public static record UserSocialRegistrationRequest(@NotBlank @Email  String email, UserSocialProvider provider) implements IUserRegistrationRequest {

        // private final String email;
        // private final UserSocialProvider provider;
    }
}
