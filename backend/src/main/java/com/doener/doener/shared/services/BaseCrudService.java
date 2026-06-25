package com.doener.doener.shared.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.domain.Example;

import com.doener.doener.shared.error.NotFoundException;
import com.doener.doener.shared.models.TableDefaultEntity;

public abstract class BaseCrudService<T extends TableDefaultEntity, ID, R extends BaseCrudRepository<T, ID>> {

    protected final R repository;

    protected BaseCrudService(R repository) {
        this.repository = repository;
    }

    public Optional<T> getById(ID id) {
        return repository.findById(id);
    }

    public Optional<T> getByUUID(UUID uuid) {
        return repository.findByUuid(uuid);
    }

    public T getByUuidOrThrow(UUID uuid) {
        return getByUUID(uuid)
                .orElseThrow(() -> new NotFoundException("Some Entity", "not found for uuid %s".formatted(uuid)));
    }

    public Iterable<T> getAll() {
        return repository.findAll();
    }

    public T save(T entity) {
        return repository.save(entity);
    }

    public void deleteById(ID id) {
        repository.deleteById(id);
    }

    public Long count() {
        return repository.count();
    }

    public boolean existsById(ID id) {
        return repository.existsById(id);
    }

    public Iterable<T> saveAll(Iterable<T> entities) {
        return repository.saveAll(entities);
    }

    public void delete(T entity) {
        repository.delete(entity);
    }

    public void deleteAll(Iterable<? extends T> entities) {
        repository.deleteAll(entities);
    }

    public List<T> findAll(Example<T> example) {
        return repository.findAll(example);
    }
}
