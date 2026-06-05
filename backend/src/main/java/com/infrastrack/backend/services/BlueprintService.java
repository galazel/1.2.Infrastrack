package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.commons.ServiceParent;
import com.infrastrack.backend.dto.BlueprintDto;
import com.infrastrack.backend.mappers.BlueprintMapper;
import com.infrastrack.backend.models.Blueprint;
import com.infrastrack.backend.repositories.BlueprintRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BlueprintService extends ServiceParent implements ServiceGeneric<BlueprintDto> {

    private final BlueprintRepository blueprintRepository;
    private final S3Service  s3Service;

    public BlueprintService( S3Service s3Service, BlueprintRepository blueprintRepository, BlueprintMapper blueprintMapper, S3Service s3Service1, S3Service s3Service2) {
        super( s3Service);
        this.blueprintRepository = blueprintRepository;
        this.s3Service = s3Service2;
    }

    @Override
    public String login(BlueprintDto dto) {
        return null;
    }

    @Override
    public String register(BlueprintDto dto , String code, MultipartFile file) {
        return null;
    }

    @Override
    public long create(BlueprintDto dto) {
        try{
            for(String key: dto.getKeys()){
                blueprintRepository.save(Blueprint.builder()
                                .key(key)
                                .projectId(dto.getProjectId())
                                .description(dto.getDescription())
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
    public Map<String, String> getAllBlueprintsFromProject(long projectId) {

        Map<String, String> map = new HashMap<>();

        List<Blueprint> blueprints =
                blueprintRepository.findAllByProjectId(projectId);

        blueprints.forEach(blueprint -> {
            String url = "/blueprints/image/" + blueprint.getKey();
            map.put(blueprint.getDescription(), url);
        });

        return map;
    }
}
