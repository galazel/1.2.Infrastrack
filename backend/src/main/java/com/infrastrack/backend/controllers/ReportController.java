package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.dto.ReportDto;
import com.infrastrack.backend.services.ReportService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/companies/reports")
public class ReportController extends ControllerGeneric<ReportDto, ReportService> {

    public ReportController(ReportService service) {
        super(service);
    }
}
