package com.doener.doener.features.user.login;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class UserLoginController {

    private static final Logger logger = LoggerFactory.getLogger(UserLoginController.class);

	private final AuthenticationManager authenticationManager;

    @PostMapping("/login")
        public ResponseEntity<Void> login(@RequestBody LoginRequest loginRequest) {

            Authentication authenticationRequest =
                UsernamePasswordAuthenticationToken.unauthenticated(loginRequest.email(), loginRequest.password());
            
                try {

                    Authentication authenticationResponse =
                        this.authenticationManager.authenticate(authenticationRequest);

                } catch (AuthenticationException exc) {
                    
                    logger.info("login failed for loginRequest: {}", loginRequest);
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();

                }

            
                return ResponseEntity.ok().build();
        }

        public record LoginRequest(String email, String password) {
        }


    // @PostMapping("/login")
    // public void login() {

    // var user = User.builder().build();

    // }

    // @PostMapping("/logout")
    // public void logout() {

    // var user = User.builder().build();

    // }

}
