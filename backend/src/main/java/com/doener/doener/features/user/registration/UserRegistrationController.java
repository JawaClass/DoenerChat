package com.doener.doener.features.user.registration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserLocalRegistrationRequest;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class UserRegistrationController {

    private static final Logger logger = LoggerFactory.getLogger(UserRegistrationController.class);

    private final UserRegistrationFacade userRegistrationFacade;


    @PostMapping("/register")
        public ResponseEntity<Void> login(@Valid @RequestBody UserLocalRegistrationRequest registerRequest) {

            logger.info("register user: {}", registerRequest);

            var createdUser = userRegistrationFacade.registerAndSendConfirmationEmail(registerRequest);
        
            return ResponseEntity.ok().build();
        }

}
