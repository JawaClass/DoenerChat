package com.doener.doener.features.user;

import org.springframework.data.repository.CrudRepository;
import com.doener.doener.features.user.registration.UserPassword;

public interface UserPasswordRepository extends CrudRepository<UserPassword, Long> {

}
