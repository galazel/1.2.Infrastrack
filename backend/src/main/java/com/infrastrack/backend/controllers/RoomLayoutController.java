package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.dto.RoomLayoutDto;
import com.infrastrack.backend.models.RoomLayout;
import com.infrastrack.backend.services.RoomLayoutService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/roomlayouts")

public class RoomLayoutController extends ControllerGeneric<RoomLayoutDto, RoomLayoutService> {

    public RoomLayoutController(RoomLayoutService service) {
        super(service);
    }
}
