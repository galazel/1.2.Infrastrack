package com.infrastrack.backend.mappers;

import org.mapstruct.Mapper;
import com.infrastrack.backend.models.Report;
import com.infrastrack.backend.dto.ReportDto;

@Mapper(componentModel = "spring")
public interface ReportMapper {
    ReportDto toDto(Report report);
    Report toEntity(ReportDto dto);
}
