package com.doener.doener.features.user;

import org.springframework.data.repository.CrudRepository;

import com.doener.doener.features.user.registration.User;

public interface UserRepository extends CrudRepository<User, Long> {

}
