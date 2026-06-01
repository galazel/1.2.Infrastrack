package com.infrastrack.backend.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import com.infrastrack.backend.models.Customer;
import com.infrastrack.backend.dto.CustomerDto;

@Mapper(componentModel = "spring")
public interface CustomerMapper {
    CustomerDto toDto(Customer customer);
    Customer toEntity(CustomerDto dto);
}