package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.dto.BlueprintDto;
import com.infrastrack.backend.mappers.BlueprintMapper;
import com.infrastrack.backend.models.Blueprint;
import com.infrastrack.backend.models.Project;
import com.infrastrack.backend.repositories.BlueprintRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.s3.S3Client;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class BlueprintService implements ServiceGeneric<BlueprintDto> {

    private final BlueprintRepository blueprintRepository;
    private final BlueprintMapper blueprintMapper;
    private final S3Service s3Service;


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
        try{
            for(String key: dto.getKeys()){
                blueprintRepository.save(Blueprint.builder()
                                .key(key)
                                .projectId(dto.getProjectId())
                        .build());
            }
            return blueprintRepository.count();
        }catch (Exception e){
            return 0L;
        }
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
