package com.infrastrack.backend.mappers;

import org.mapstruct.Mapper;
import com.infrastrack.backend.models.Blueprint;
import com.infrastrack.backend.dto.BlueprintDto;

@Mapper(componentModel = "spring")
public interface BlueprintMapper {
    BlueprintDto toDto(Blueprint b);
    Blueprint toEntity(BlueprintDto dto);
}