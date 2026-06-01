package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.dto.FloorPlanDto;
import com.infrastrack.backend.models.FloorPlan;
import com.infrastrack.backend.services.FloorPlanService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("api/v1/floorplans")
public class FloorPlanController extends ControllerGeneric<FloorPlanDto, FloorPlanService> {
    public FloorPlanController(FloorPlanService service) {
        super(service);
    }
}
