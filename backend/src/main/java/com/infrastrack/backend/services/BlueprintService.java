package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.dto.BlueprintDto;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class BlueprintService implements ServiceGeneric<BlueprintDto> {
    @Override
    public String login(BlueprintDto dto) {
        return null;
    }

    @Override
    public String register(BlueprintDto dto , String code) {
        return null;
    }

    @Override
    public void requestVerification(String email) {

    }

    @Override
    public long create(BlueprintDto dto) {
        return 0;
    }

    @Override
    public String update(BlueprintDto dto) {
        return "";
    }

    @Override
    public String delete(long id) {
        return "";
    }
}
