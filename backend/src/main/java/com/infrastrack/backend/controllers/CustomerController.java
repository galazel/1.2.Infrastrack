package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.dto.CustomerDto;
import com.infrastrack.backend.services.AIContractorService;
import com.infrastrack.backend.services.CustomerService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/customers/")
@PreAuthorize("hasRole('CUSTOMER')")
@Slf4j
public class CustomerController extends ControllerGeneric<CustomerDto, CustomerService> {
    private final AIContractorService aiContractorService;
    private final CustomerService customerService;

    public CustomerController(CustomerService service, AIContractorService aiContractorService, CustomerService customerService) {
        super(service);
        this.aiContractorService = aiContractorService;
        this.customerService = customerService;
    }
    public String getEmail(){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userDetails.getUsername();
    }

    @GetMapping("ask")
    public ResponseEntity<String> ask( @Valid @RequestParam("question") String question ) {
        return new ResponseEntity<>(aiContractorService.chat(customerService.getCustomerId(getEmail()),customerService.getCustomerName(getEmail()),question), HttpStatus.OK);
    }


}
