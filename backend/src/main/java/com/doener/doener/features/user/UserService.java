package com.doener.doener.features.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.doener.doener.features.user.registration.User;
import com.doener.doener.features.user.registration.User.Role;
import com.doener.doener.features.user.registration.UserPassword;
import com.doener.doener.features.user.registration.UserPasswordHandler;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    private final UserRepository userRepo;
    private final UserPasswordHandler userPasswordHandler;
    private final UserPasswordService userPasswordService;

    public User createUser(String name) {
        var user = new User();
        user.setRole(Role.USER);
        user.setName(name);
        logger.info("Creating merchant with name: {}", name);
        return userRepo.save(user);
    }

    public Iterable<User> getAllMerchants() {
        logger.info("Fetching all merchants");
        return userRepo.findAll();
    }

    public User getMerchantById(Long id) {
        logger.info("Fetching merchant with ID: {}", id);
        return userRepo.findById(id).orElse(null);
    }

    public User save(User user) {
        return userRepo.save(user);
    }

    public User createLocalUserWithPassword(User user, String password) {

        var savedUser = save(user);
        UserPassword userPassword = userPasswordHandler.createForUser(user, password);

        userPasswordService.save(userPassword);
        return savedUser;
    }
}
