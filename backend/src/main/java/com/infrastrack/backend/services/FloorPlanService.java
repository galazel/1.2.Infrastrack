package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.AuthenticationManagement;
import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.commons.ServiceParent;
import com.infrastrack.backend.dto.FloorPlanDto;
import com.infrastrack.backend.mappers.FloorPlanMapper;
import com.infrastrack.backend.models.Blueprint;
import com.infrastrack.backend.models.FloorPlan;
import com.infrastrack.backend.repositories.FloorPlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@Service
public class FloorPlanService extends ServiceParent implements ServiceGeneric<FloorPlanDto> {

    private final FloorPlanRepository floorPlanRepository;
    private final FloorPlanMapper floorPlanMapper;

    public FloorPlanService(PasswordEncoder passwordEncoder, AuthenticationManagement authenticationManagement, VerificationService verificationService, S3Service s3Service, FloorPlanRepository floorPlanRepository, FloorPlanMapper floorPlanMapper) {
        super(passwordEncoder, authenticationManagement, verificationService, s3Service);
        this.floorPlanRepository = floorPlanRepository;
        this.floorPlanMapper = floorPlanMapper;
    }

    @Override
    public String login(FloorPlanDto dto) {
        return null;
    }

    @Override
    public String register(FloorPlanDto dto , String code, MultipartFile file) {
        return null;
    }

    @Override
    public void requestVerification(String email) {

    }

    @Override
    public long create(FloorPlanDto dto) {
        try{
            for(String key: dto.getKeys()){
                floorPlanRepository.save(FloorPlan.builder()
                        .key(key)
                        .projectId(dto.getProjectId())
                        .build());
            }
            return floorPlanRepository.count();

        }catch (Exception e){
            return 0L;
        }
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
