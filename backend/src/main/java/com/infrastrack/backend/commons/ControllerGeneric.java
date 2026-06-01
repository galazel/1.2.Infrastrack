package com.infrastrack.backend.commons;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


public class ControllerGeneric <T, V extends ServiceGeneric<T>> {

    protected final V service;

    public ControllerGeneric(V service) {
        this.service = service;
    }

    @PostMapping("login")
    public ResponseEntity<String> access(@RequestBody T entity) {
        return new ResponseEntity<>(service.login(entity), HttpStatus.OK);
    }

    @PostMapping("register")
    public ResponseEntity<String> create(@RequestBody T entity) {
        return new ResponseEntity<>(service.register(entity),HttpStatus.OK);
    }

}
