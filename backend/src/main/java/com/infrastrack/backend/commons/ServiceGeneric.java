package com.infrastrack.backend.commons;


import com.infrastrack.backend.dto.CustomerDto;

public interface ServiceGeneric<T> {
    String login(T dto);
    String register(T dto, String code) throws Exception;
    void requestVerification(String email);

}
