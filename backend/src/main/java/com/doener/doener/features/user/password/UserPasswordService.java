package com.doener.doener.features.user.password;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserPasswordService {

    private final UserPasswordRepository userPasswordRepository;

    public UserPassword updatePassword() {
        return null;
    }

    public UserPassword save(UserPassword userPassword) {
        return userPasswordRepository.save(userPassword);
    }

}
