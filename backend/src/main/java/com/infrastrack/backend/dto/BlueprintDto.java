package com.infrastrack.backend.dto;

import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BlueprintDto {
    private Long id;
    private List<String> keys;
    private Long projectId;
}