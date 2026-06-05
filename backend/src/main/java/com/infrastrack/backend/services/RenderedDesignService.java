package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.commons.ServiceParent;
import com.infrastrack.backend.dto.RenderedDesignDto;
import com.infrastrack.backend.mappers.RenderedDesignMapper;
import com.infrastrack.backend.models.RenderedDesign;
import com.infrastrack.backend.repositories.RenderedDesignRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service

public class RenderedDesignService extends ServiceParent implements ServiceGeneric<RenderedDesignDto> {

    private final RenderedDesignRepository renderedDesignRepository;
    private final RenderedDesignMapper renderedDesignMapper;

    public RenderedDesignService(S3Service s3Service, RenderedDesignRepository renderedDesignRepository, RenderedDesignMapper renderedDesignMapper) {
        super(s3Service);
        this.renderedDesignRepository = renderedDesignRepository;
        this.renderedDesignMapper = renderedDesignMapper;
    }

    @Override
    public String login(RenderedDesignDto dto) {
        return null;
    }

    @Override
    public String register(RenderedDesignDto dto , String code, MultipartFile file) {
        return null;
    }

    @Override
    public long create(RenderedDesignDto dto) {
        try{
            for(String key: dto.getKeys()){
                renderedDesignRepository.save(RenderedDesign.builder()
                        .key(key)
                        .projectId(dto.getProjectId())
                        .description(dto.getDescription())
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

    public java.util.Map<String, String> getAllRenderedDesignsFromProject(long projectId) {

        java.util.Map<String, String> map = new java.util.HashMap<>();

        java.util.List<RenderedDesign> designs =
                renderedDesignRepository.findAllByProjectId(projectId);

        designs.forEach(d -> {
            String url = "/rendered-designs/image/" + d.getKey();
            map.put(d.getDescription(), url);
        });

        return map;
    }
}
