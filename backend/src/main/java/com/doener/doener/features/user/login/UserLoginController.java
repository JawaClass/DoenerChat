package com.doener.doener.features.user.login;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.doener.doener.features.user.AuthenticatedSessionUser;
import com.doener.doener.features.user.UserService;
import com.doener.doener.features.user.login.UserLoginService.LoginRequest;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class UserLoginController {

    private static final Logger logger = LoggerFactory.getLogger(UserLoginController.class);

    private final UserLoginService userLoginService;

    @GetMapping("/whoami")
    public Object whoami(Authentication authentication) {
        return authentication;
    }

    private final UserService userService;

    @GetMapping("/status")
    public Map<String, Object> authStatus(Authentication authentication) {
        boolean loggedIn = authentication != null && authentication.isAuthenticated();

        if (loggedIn) {
            var principal = (AuthenticatedSessionUser) authentication.getPrincipal();
            var user = userService.findById(principal.getId()).orElse(null);
            if (user == null) {
                // session refers to a user that no longer exists — treat as logged out
                return Map.of("loggedIn", false);
            }

            return Map.of("loggedIn", true, "user", user.getEmail());
        }

        return Map.of("loggedIn", false);
    }

    @PostMapping("/login")
    public ResponseEntity<Void> login(@Valid @RequestBody LoginRequest loginRequest, HttpServletRequest request,
            HttpServletResponse response) {

        try {

            var authResponse = userLoginService.login(loginRequest, request, response);

        } catch (AuthenticationException exc) {

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();

        }

        return ResponseEntity.ok().build();
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(Authentication authentication, HttpServletRequest request,
            HttpServletResponse response) {
        userLoginService.logout(authentication, request, response);

        return ResponseEntity.accepted().build();
    }

}
