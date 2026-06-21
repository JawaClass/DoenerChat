package com.doener.doener.features.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.doener.doener.features.user.password.UserPasswordRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private static final Logger logger = LoggerFactory.getLogger(UserDetailsServiceImpl.class);

    private final UserRepository userRepository;

    private final UserPasswordRepository userPasswordRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        var user = userRepository.findByEmail(username).orElse(null);
        logger.info("loadUserByUsername. username= {}", username);

        if (user == null) {
            logger.info("loadUserByUsername. username not found {}", username);
            throw new UsernameNotFoundException("User not found: %s".formatted(username));
        }

        var userPassword = userPasswordRepository.findByUser_Id(user.getId());

        if (userPassword.isEmpty()) {
            throw new UsernameNotFoundException(
                    "No password found for user: %s. Or if this is oAuth social login eg Google, change this error throwns here..."
                            .formatted(username));
        }
        var passwordHashed = userPassword.isEmpty() ? null : userPassword.get().getPasswordHashed();

        AuthenticatedSessionUser userDetails = new AuthenticatedSessionUser(user, passwordHashed);

        return userDetails;
    }

}
