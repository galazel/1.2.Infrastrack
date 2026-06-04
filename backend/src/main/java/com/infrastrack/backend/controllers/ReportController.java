package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.dto.ReportDto;
import com.infrastrack.backend.services.IngestionService;
import com.infrastrack.backend.services.ReportService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/companies/reports")
@Slf4j
@PreAuthorize("hasRole('COMPANY')")
public class ReportController extends ControllerGeneric<ReportDto, ReportService> {
    private final IngestionService ingestionService;

    public ReportController(ReportService service, IngestionService ingestionService) {
        super(service);
        this.ingestionService = ingestionService;
    }
    @PostMapping(value = "/ingest", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> ingest(@Valid @RequestPart("file") MultipartFile file,  @Valid @RequestParam("projectId") long projectId) {
        log.info(file.getOriginalFilename());
        log.info(String.valueOf(projectId));
        ingestionService.ingest(file, projectId);

        return ResponseEntity.ok("Ingested: " + file.getOriginalFilename());
    }
}
