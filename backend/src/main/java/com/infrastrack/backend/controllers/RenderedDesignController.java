package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.dto.RenderedDesignDto;
import com.infrastrack.backend.models.RenderedDesign;
import com.infrastrack.backend.services.RenderedDesignService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/rendereddesigns")

public class RenderedDesignController extends ControllerGeneric<RenderedDesignDto, RenderedDesignService> {

    public RenderedDesignController(RenderedDesignService service) {
        super(service);
    }
}
