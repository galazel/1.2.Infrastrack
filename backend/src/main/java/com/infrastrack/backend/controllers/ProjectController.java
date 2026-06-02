package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.dto.ProjectDto;
import com.infrastrack.backend.services.ProjectService;
import com.infrastrack.backend.services.S3Service;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/projects/")
public class ProjectController extends ControllerGeneric<ProjectDto, ProjectService> {
    private final S3Service s3Service;

    public ProjectController(ProjectService service, S3Service s3Service) {
        super(service);
        this.s3Service = s3Service;
    }

}
