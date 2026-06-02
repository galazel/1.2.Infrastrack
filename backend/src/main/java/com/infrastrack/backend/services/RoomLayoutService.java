package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.dto.RoomLayoutDto;
import com.infrastrack.backend.mappers.RoomLayoutMapper;
import com.infrastrack.backend.models.FloorPlan;
import com.infrastrack.backend.models.RenderedDesign;
import com.infrastrack.backend.models.RoomLayout;
import com.infrastrack.backend.repositories.RoomLayoutRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class RoomLayoutService implements ServiceGeneric<RoomLayoutDto> {
    private final RoomLayoutRepository roomLayoutRepository;
    private final RoomLayoutMapper roomLayoutMapper;
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
        try{
            for(String key: dto.getKeys()){
                roomLayoutRepository.save(RoomLayout.builder()
                        .key(key)
                        .projectId(dto.getProjectId())
                        .build());
            }
            return roomLayoutRepository.count();

        }catch (Exception e){
            return 0L;
        }
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
