package com.doener.doener.shared.services;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public abstract class BaseCrudController<TD> {

    private final BaseCrudService<TD, Long> service;

    @GetMapping("/{id}")
    public TD getById(@PathVariable Long id) {
        return service.getById(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Item not found with ID: " + id));
    }

    @GetMapping
    public Iterable<TD> getAll() {
        return service.getAll();
    }
}
