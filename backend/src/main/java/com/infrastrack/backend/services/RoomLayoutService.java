package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.dto.RoomLayoutDto;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class RoomLayoutService implements ServiceGeneric<RoomLayoutDto> {
    @Override
    public String login(RoomLayoutDto dto) {
        return null;
    }

    @Override
    public String register(RoomLayoutDto dto , String code) {
        return null;
    }

    @Override
    public void requestVerification(String email) {

    }

    @Override
    public long create(RoomLayoutDto dto) {
        return 0;
    }

    @Override
    public String update(RoomLayoutDto dto) {
        return "";
    }

    @Override
    public String delete(long id) {
        return "";
    }
}
