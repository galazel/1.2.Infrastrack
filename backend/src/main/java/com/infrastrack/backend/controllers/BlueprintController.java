package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.dto.BlueprintDto;
import com.infrastrack.backend.services.BlueprintService;
import com.infrastrack.backend.services.S3Service;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api/v1/companies/blueprints")
@Slf4j
public class BlueprintController extends ControllerGeneric<BlueprintDto, BlueprintService> {

    private final S3Service  s3Service;

    public BlueprintController(BlueprintService service, S3Service s3Service) {
        super(service);
        this.s3Service = s3Service;
    }


    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> upload(
            @Valid @RequestParam("projectId") Long projectId,
            @Valid @RequestParam("blueprints") List<MultipartFile> files
    ) throws IOException {
        log.info("Uploading blueprint files to S3 {}", files);
        List<String> keys = s3Service.upload(files, "blueprints", projectId);
        service.create(BlueprintDto.builder()
                        .keys(keys)
                        .projectId(projectId)
                .build());
        return ResponseEntity.ok("Uploaded " + files.size() + " files successfully");
    }

}