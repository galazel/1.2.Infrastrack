package com.infrastrack.backend.mappers;

import org.mapstruct.Mapper;
import com.infrastrack.backend.models.RoomLayout;
import com.infrastrack.backend.dto.RoomLayoutDto;

@Mapper(componentModel = "spring")
public interface RoomLayoutMapper {
    RoomLayoutDto toDto(RoomLayout r);
    RoomLayout toEntity(RoomLayoutDto dto);
}