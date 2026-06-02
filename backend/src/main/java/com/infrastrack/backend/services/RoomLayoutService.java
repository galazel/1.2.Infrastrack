package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.AuthenticationManagement;
import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.commons.ServiceParent;
import com.infrastrack.backend.dto.RoomLayoutDto;
import com.infrastrack.backend.mappers.RoomLayoutMapper;
import com.infrastrack.backend.models.FloorPlan;
import com.infrastrack.backend.models.RenderedDesign;
import com.infrastrack.backend.models.RoomLayout;
import com.infrastrack.backend.repositories.RoomLayoutRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@Service
public class RoomLayoutService extends ServiceParent implements ServiceGeneric<RoomLayoutDto> {
    private final RoomLayoutRepository roomLayoutRepository;
    private final RoomLayoutMapper roomLayoutMapper;

    public RoomLayoutService(PasswordEncoder passwordEncoder, AuthenticationManagement authenticationManagement, VerificationService verificationService, S3Service s3Service, RoomLayoutRepository roomLayoutRepository, RoomLayoutMapper roomLayoutMapper) {
        super(passwordEncoder, authenticationManagement, verificationService, s3Service);
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
