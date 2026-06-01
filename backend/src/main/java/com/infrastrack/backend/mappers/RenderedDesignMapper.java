package com.infrastrack.backend.mappers;

import org.mapstruct.Mapper;
import com.infrastrack.backend.models.RenderedDesign;
import com.infrastrack.backend.dto.RenderedDesignDto;

@Mapper(componentModel = "spring")
public interface RenderedDesignMapper {
    RenderedDesignDto toDto(RenderedDesign r);
    RenderedDesign toEntity(RenderedDesignDto dto);
}