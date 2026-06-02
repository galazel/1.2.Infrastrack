package com.infrastrack.backend.commons;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ServiceGeneric<T> {
    long create(T dto);
    String login(T dto);
    String register(T dto, String code, MultipartFile file) throws Exception;
    String update(T dto);
    String delete(long id);
}
