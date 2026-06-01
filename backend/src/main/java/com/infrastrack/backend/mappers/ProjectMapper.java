package com.infrastrack.backend.mappers;

import org.mapstruct.Mapper;
import com.infrastrack.backend.models.Project;
import com.infrastrack.backend.dto.ProjectDto;

@Mapper(componentModel = "spring")
public interface ProjectMapper {
    ProjectDto toDto(Project project);
    Project toEntity(ProjectDto dto);
}