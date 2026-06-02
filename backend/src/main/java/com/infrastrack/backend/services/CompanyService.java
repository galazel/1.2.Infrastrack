package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.dto.CompanyDto;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class CompanyService implements ServiceGeneric<CompanyDto> {
    @Override
    public String login(CompanyDto dto) {
        return null;
    }

    @Override
    public String register(CompanyDto dto , String code) {
        return null;
    }

    @Override
    public void requestVerification(String email) {

    }

    @Override
    public long create(CompanyDto dto) {
        return 0;
    }

    @Override
    public String update(CompanyDto dto) {
        return "";
    }

    @Override
    public String delete(long id) {
        return "";
    }
}
