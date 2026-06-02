package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.dto.RenderedDesignDto;
import com.infrastrack.backend.mappers.RenderedDesignMapper;
import com.infrastrack.backend.models.FloorPlan;
import com.infrastrack.backend.models.RenderedDesign;
import com.infrastrack.backend.repositories.RenderedDesignRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class RenderedDesignService implements ServiceGeneric<RenderedDesignDto> {

    private final RenderedDesignRepository renderedDesignRepository;
    private final RenderedDesignMapper renderedDesignMapper;

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
        try{
            for(String key: dto.getKeys()){
                renderedDesignRepository.save(RenderedDesign.builder()
                        .key(key)
                        .projectId(dto.getProjectId())
                        .build());
            }
            return renderedDesignRepository.count();

        }catch (Exception e){
            return 0L;
        }
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
