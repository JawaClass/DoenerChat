package com.doener.doener.features.user.address;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.doener.doener.features.user.User;

public interface UserAddressRepository extends CrudRepository<UserAddress, Long> {

    @Query("SELECT MAX(ua.ordering) FROM UserAddress ua WHERE ua.user = :user")
    Optional<Integer> findMaxOrderingByUser(@Param("user") User user);

}
