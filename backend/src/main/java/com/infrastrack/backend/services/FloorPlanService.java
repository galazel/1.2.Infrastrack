package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.dto.FloorPlanDto;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class FloorPlanService implements ServiceGeneric<FloorPlanDto> {
    @Override
    public String login(FloorPlanDto dto) {
        return null;
    }

    @Override
    public String register(FloorPlanDto dto , String code) {
        return null;
    }

    @Override
    public void requestVerification(String email) {

    }

    @Override
    public long create(FloorPlanDto dto) {
        return 0;
    }

    @Override
    public String update(FloorPlanDto dto) {
        return "";
    }

    @Override
    public String delete(long id) {
        return "";
    }
}
