package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.dto.FloorPlanDto;
import com.infrastrack.backend.services.FloorPlanService;
import com.infrastrack.backend.services.S3Service;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api/v1/companies/floorplans")
public class FloorPlanController extends ControllerGeneric<FloorPlanDto, FloorPlanService> {
    private final S3Service s3Service;

    public FloorPlanController(FloorPlanService service, S3Service s3Service) {
        super(service);
        this.s3Service = s3Service;
    }

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> upload(  @RequestParam("projectId") Long projectId, @RequestParam("floor-plans")  List<MultipartFile> files) throws IOException {
        List<String> keys = s3Service.upload(files, "floor-plans", projectId);
        service.create(FloorPlanDto.builder()
                .keys(keys)
                .projectId(projectId)
                .build());
        return ResponseEntity.ok("Uploaded " + files.size() + " files successfully");
    }
}
