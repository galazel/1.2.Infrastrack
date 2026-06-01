package com.infrastrack.backend.commons;



public interface ServiceGeneric<T> {
    String login(T dto);
    String register(T dto);

}
