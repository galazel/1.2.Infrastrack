package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.dto.ProjectDto;
import com.infrastrack.backend.services.ProjectService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/projects/")
public class ProjectController extends ControllerGeneric<ProjectDto, ProjectService> {

    public ProjectController(ProjectService service) {
        super(service);
    }

}
