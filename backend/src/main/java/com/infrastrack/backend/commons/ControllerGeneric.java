package com.infrastrack.backend.commons;

import com.infrastrack.backend.dto.BlueprintDto;
import com.infrastrack.backend.dto.ProjectDto;
import com.infrastrack.backend.services.S3Service;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@Slf4j
public class ControllerGeneric <T, V extends ServiceParent & ServiceGeneric<T> > {

    protected final V service;


    public ControllerGeneric(V service) {
        this.service = service;}

    @PostMapping("login")
    public ResponseEntity<String> access(@Valid @RequestBody T entity) {
        return new ResponseEntity<>(service.login(entity), HttpStatus.OK);
    }

    @PostMapping(value = "register", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> create(
            @Valid @RequestPart("entity") T entity,
            @Valid @RequestParam("code") String code,
            @Valid @RequestPart("profile") MultipartFile file) throws Exception {

        return new ResponseEntity<>(
                service.register(entity, code, file),
                HttpStatus.OK
        );
    }


    @PostMapping("request-verification")
    public ResponseEntity<String> verify( @Valid @RequestParam("email") String email) {
        service.requestVerification(email);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("create")
    public ResponseEntity<Long> create( @Valid @RequestBody T entity) {
        return new ResponseEntity<>(service.create(entity), HttpStatus.OK);
    }



}
