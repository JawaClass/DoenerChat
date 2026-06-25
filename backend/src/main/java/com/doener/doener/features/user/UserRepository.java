package com.doener.doener.features.user;

import java.util.Optional;

import com.doener.doener.shared.services.BaseCrudRepository;

public interface UserRepository extends BaseCrudRepository<User, Long> {

    public Optional<User> findByEmail(String email);

}
