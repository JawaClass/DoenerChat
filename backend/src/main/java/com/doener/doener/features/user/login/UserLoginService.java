package com.doener.doener.features.user.login;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.context.SecurityContextHolderStrategy;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.constraints.Email;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserLoginService {

    private SecurityContextRepository securityContextRepository = new HttpSessionSecurityContextRepository();

    private final SecurityContextHolderStrategy securityContextHolderStrategy = SecurityContextHolder
            .getContextHolderStrategy();

    private static final Logger logger = LoggerFactory.getLogger(UserLoginService.class);

    private final AuthenticationManager authenticationManager;

    public record LoginRequest(@Email String email, String password) {
    }


    public record ResetPasswordRequest(@Email String email) {
    }

    public record ResetPasswordVerifyTokenRequest(String token) {
    }

    public record UpdatePasswordRequest(String newPassword, String token) {
    }



    public Authentication login(LoginRequest loginRequest, HttpServletRequest request, HttpServletResponse response) {

        var currentCtx = securityContextHolderStrategy.getContext();

        if (currentCtx != null && currentCtx.getAuthentication() != null) {
            logger.info("LoginRequest while already authenticated. {}", loginRequest);
        }

        Authentication authenticationRequest = UsernamePasswordAuthenticationToken.unauthenticated(loginRequest.email(),
                loginRequest.password());

        Authentication authenticationResponse;

        try {
            authenticationResponse = this.authenticationManager.authenticate(authenticationRequest);

        } catch (AuthenticationException exc) {

            logger.info("login failed for loginRequest: {}. {}", loginRequest, exc.getMessage());

            throw exc;

        }

        SecurityContext context = securityContextHolderStrategy.createEmptyContext();
        context.setAuthentication(authenticationResponse);
        securityContextHolderStrategy.setContext(context);
        securityContextRepository.saveContext(context, request, response);

        return authenticationResponse;

    }

    public void logout(Authentication authentication, HttpServletRequest request, HttpServletResponse response) {
        /**
         * logout user
         * cleaer auth context
         * remove session from database
         */
        securityContextHolderStrategy.clearContext();

        var session = request.getSession(false);

        if (session != null) {

            session.invalidate();
        }

    }

}
