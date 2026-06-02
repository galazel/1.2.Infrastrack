package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.dto.CustomerDto;
import com.infrastrack.backend.services.AIContractorService;
import com.infrastrack.backend.services.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/v1/customers/")
@PreAuthorize("hasRole('CUSTOMER')")
public class CustomerController extends ControllerGeneric<CustomerDto, CustomerService> {
    private final AIContractorService aiContractorService;

    public CustomerController(CustomerService service, AIContractorService aiContractorService) {
        super(service);
        this.aiContractorService = aiContractorService;
    }

    @GetMapping("ask")
    public ResponseEntity<String> ask(@RequestParam("question") String question ) {
        return new ResponseEntity<>(aiContractorService.chat(1,"fsdaf",question), HttpStatus.OK);
    }


}
