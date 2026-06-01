package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.dto.BlueprintDto;
import com.infrastrack.backend.models.Blueprint;
import com.infrastrack.backend.repositories.BlueprintRepository;
import com.infrastrack.backend.services.BlueprintService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("api/v1/blueprints")
public class BlueprintController extends ControllerGeneric<BlueprintDto, BlueprintService> {

    public BlueprintController(BlueprintService service) {
        super(service);
    }
}
