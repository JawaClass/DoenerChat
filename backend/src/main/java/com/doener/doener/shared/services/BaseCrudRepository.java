package com.doener.doener.shared.services;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.doener.doener.shared.models.TableDefaultEntity;

public interface BaseCrudRepository<T extends TableDefaultEntity, ID> extends JpaRepository<T, ID> {

    Optional<T> findByUuid(UUID uuid);

}
