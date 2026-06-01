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
    public String register(CompanyDto dto) {
        return null;
    }
}
