package com.doener.doener.shared.error;

public class NotFoundException extends DoenerException {

    public NotFoundException(String entityName, String description) {
        super("Entity %s not found: %s".formatted(entityName, description), "NOT_FOUND");
    }

}
