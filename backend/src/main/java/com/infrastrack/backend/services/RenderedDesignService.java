package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.dto.RenderedDesignDto;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class RenderedDesignService implements ServiceGeneric<RenderedDesignDto> {
    @Override
    public String login(RenderedDesignDto dto) {
        return null;
    }

    @Override
    public String register(RenderedDesignDto dto , String code) {
        return null;
    }

    @Override
    public void requestVerification(String email) {

    }

    @Override
    public long create(RenderedDesignDto dto) {
        return 0;
    }

    @Override
    public String update(RenderedDesignDto dto) {
        return "";
    }

    @Override
    public String delete(long id) {
        return "";
    }
}
