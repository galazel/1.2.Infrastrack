package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.dto.RenderedDesignDto;
import com.infrastrack.backend.services.RenderedDesignService;
import com.infrastrack.backend.services.S3Service;
import jakarta.validation.Valid;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api/v1/companies/redered-designs")

public class RenderedDesignController extends ControllerGeneric<RenderedDesignDto, RenderedDesignService> {
    private final S3Service s3Service;

    public RenderedDesignController(RenderedDesignService service, S3Service s3Service) {
        super(service);
        this.s3Service = s3Service;
    }

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> upload(@Valid @RequestParam("projectId") Long projectId, @Valid @RequestParam("rendered-designs") List<MultipartFile> files) throws IOException {
        List<String> keys = s3Service.upload(files, "rendered-designs", projectId);
        service.create(RenderedDesignDto.builder()
                .keys(keys)
                .projectId(projectId)
                .build());
        return ResponseEntity.ok("Uploaded " + files.size() + " files successfully");
    }
}
