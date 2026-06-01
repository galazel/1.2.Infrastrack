package com.infrastrack.backend.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import com.infrastrack.backend.models.Company;
import com.infrastrack.backend.dto.CompanyDto;

@Mapper(componentModel = "spring")
public interface CompanyMapper {
    CompanyDto toDto(Company company);
    Company toEntity(CompanyDto dto);
}