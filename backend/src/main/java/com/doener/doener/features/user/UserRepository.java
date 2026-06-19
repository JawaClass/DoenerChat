package com.doener.doener.features.user;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

            public   Optional<User> findByEmail(String email);

}
