package com.infrastrack.backend.controllers;

import com.infrastrack.backend.commons.ControllerGeneric;
import com.infrastrack.backend.dto.CustomerDto;
import com.infrastrack.backend.services.CustomerService;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/v1/customers/")
public class CustomerController extends ControllerGeneric<CustomerDto, CustomerService> {

    public CustomerController(CustomerService service) {
        super(service);
    }

}
