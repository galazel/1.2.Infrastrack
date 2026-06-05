package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.commons.ServiceParent;
import com.infrastrack.backend.dto.RoomLayoutDto;
import com.infrastrack.backend.mappers.RoomLayoutMapper;
import com.infrastrack.backend.models.RoomLayout;
import com.infrastrack.backend.repositories.RoomLayoutRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class RoomLayoutService extends ServiceParent implements ServiceGeneric<RoomLayoutDto> {
    private final RoomLayoutRepository roomLayoutRepository;
    private final RoomLayoutMapper roomLayoutMapper;

    public RoomLayoutService(S3Service s3Service, RoomLayoutRepository roomLayoutRepository, RoomLayoutMapper roomLayoutMapper) {
        super(s3Service);
        this.roomLayoutRepository = roomLayoutRepository;
        this.roomLayoutMapper = roomLayoutMapper;
    }

    @Override
    public String login(RoomLayoutDto dto) {
        return null;
    }

    @Override
    public String register(RoomLayoutDto dto , String code, MultipartFile file) {
        return null;
    }


    @Override
    public long create(RoomLayoutDto dto) {
        try{
            for(String key: dto.getKeys()){
                roomLayoutRepository.save(RoomLayout.builder()
                        .key(key)
                        .projectId(dto.getProjectId())
                        .description(dto.getDescription())
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

    public java.util.Map<String, String> getAllRoomLayoutsFromProject(long projectId) {

        java.util.Map<String, String> map = new java.util.HashMap<>();

        java.util.List<RoomLayout> layouts =
                roomLayoutRepository.findAllByProjectId(projectId);

        layouts.forEach(l -> {
            String url = "/room-layouts/image/" + l.getKey();
            map.put(l.getDescription(), url);
        });

        return map;
    }
}
