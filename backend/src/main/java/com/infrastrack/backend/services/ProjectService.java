package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.AuthenticationManagement;
import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.commons.ServiceParent;
import com.infrastrack.backend.dto.ProjectDto;
import com.infrastrack.backend.mappers.ProjectMapper;
import com.infrastrack.backend.models.Project;
import com.infrastrack.backend.repositories.ProjectRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional
public class ProjectService extends ServiceParent implements ServiceGeneric<ProjectDto> {

    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;

    public ProjectService(PasswordEncoder passwordEncoder, AuthenticationManagement authenticationManagement, VerificationService verificationService, S3Service s3Service, ProjectRepository projectRepository, ProjectMapper projectMapper) {
        super(passwordEncoder, authenticationManagement, verificationService, s3Service);
        this.projectRepository = projectRepository;
        this.projectMapper = projectMapper;
    }

    @Override
    public String login(ProjectDto dto) {
        return "";
    }

    @Override
    public String register(ProjectDto dto, String code, MultipartFile file) {
        return "";
    }

    @Override
    public void requestVerification(String email) {

    }

    @Override
    public long create(ProjectDto dto) {
        try{
            Project project = projectRepository.save(projectMapper.toEntity(dto));
            return project.getId();

        }catch (Exception e){
            return 0;
        }
    }

    @Override
    public String update(ProjectDto dto) {
        try {
            Project project = projectRepository.findById(dto.getId())
                    .orElseThrow(() -> new RuntimeException("Project not found"));
//            project.setName(dto.name());
//            project.setDescription(dto.description());
//            project.setStatus(dto.status());
            projectRepository.save(project);

            return "Project updated";

        } catch (Exception e) {
            return e.getMessage();
        }
    }
    @Override
    public String delete(long id) {
        try{
            projectRepository.deleteById(id);
            return "Project Deleted";
        }catch (Exception e){
            return e.getMessage();
        }

    }
}
