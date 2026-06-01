package com.infrastrack.backend.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RenderedDesignDto {
    private Long id;
    private String bucketName;
    private Long projectId;
}