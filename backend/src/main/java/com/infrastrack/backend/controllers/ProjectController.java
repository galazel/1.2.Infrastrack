package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.dto.ProjectDto;
import com.infrastrack.backend.services.IngestionService;
import com.infrastrack.backend.services.ProjectService;
import com.infrastrack.backend.services.S3Service;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/v1/companies/projects")
public class ProjectController extends ControllerGeneric<ProjectDto, ProjectService> {
    public ProjectController(ProjectService service, S3Service s3Service, IngestionService ingestionService) {
        super(service);
    }
}
