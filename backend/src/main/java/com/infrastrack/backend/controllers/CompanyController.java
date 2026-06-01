package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.dto.CompanyDto;
import com.infrastrack.backend.services.CompanyService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/companies/")
public class CompanyController extends ControllerGeneric<CompanyDto, CompanyService> {

    public CompanyController(CompanyService service) {
        super(service);
    }
}
