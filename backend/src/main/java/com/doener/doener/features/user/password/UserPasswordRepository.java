package com.doener.doener.features.user.password;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface UserPasswordRepository extends CrudRepository<UserPassword, Long> {

    public Optional<UserPassword> findByUser_Id(Long id);

}
