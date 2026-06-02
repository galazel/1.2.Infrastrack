package com.infrastrack.backend.commons;


import com.infrastrack.backend.dto.ProjectDto;

public interface ServiceGeneric<T> {
    String login(T dto);
    String register(T dto, String code) throws Exception;
    void requestVerification(String email);
    long create(T dto);
    String update(T dto);
    String delete(long id);
}
