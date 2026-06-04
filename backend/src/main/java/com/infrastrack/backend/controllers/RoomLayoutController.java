package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.dto.RoomLayoutDto;
import com.infrastrack.backend.services.RoomLayoutService;
import com.infrastrack.backend.services.S3Service;
import jakarta.validation.Valid;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api/v1/companies/room-layouts")

public class RoomLayoutController extends ControllerGeneric<RoomLayoutDto, RoomLayoutService> {
    private final S3Service s3Service;

    public RoomLayoutController(RoomLayoutService service, S3Service s3Service) {
        super(service);
        this.s3Service = s3Service;
    }

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> upload(@Valid @RequestParam("projectId") Long projectId, @Valid @RequestParam("room-layouts") List<MultipartFile> files) throws IOException {
        List<String> keys = s3Service.upload(files, "room-layouts", projectId);
        service.create(RoomLayoutDto.builder()
                .keys(keys)
                .projectId(projectId)
                .build());
        return ResponseEntity.ok("Uploaded " + files.size() + " files successfully");
    }
}
