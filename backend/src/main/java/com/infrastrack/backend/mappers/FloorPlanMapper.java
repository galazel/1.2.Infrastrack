package com.infrastrack.backend.mappers;

import org.mapstruct.Mapper;
import com.infrastrack.backend.models.FloorPlan;
import com.infrastrack.backend.dto.FloorPlanDto;

@Mapper(componentModel = "spring")
public interface FloorPlanMapper {
    FloorPlanDto toDto(FloorPlan f);
    FloorPlan toEntity(FloorPlanDto dto);
}