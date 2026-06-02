package com.infrastrack.backend.commons;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@Slf4j
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
    public ResponseEntity<String> create(@RequestBody T entity, @RequestParam("code") String code) throws Exception {
        return new ResponseEntity<>(service.register(entity, code),HttpStatus.OK);
    }

    @PostMapping("request-verification")
    public ResponseEntity<String> verify(@RequestParam("email") String email) {
        service.requestVerification(email);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("create")
    public ResponseEntity<String> create(@RequestBody T entity) {
        return new ResponseEntity<>(service.create(entity), HttpStatus.OK);
    }


}
