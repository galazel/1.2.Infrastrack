package com.infrastrack.backend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Entity
@Table(name = "floor_plans")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FloorPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String key;

    @NotNull
    private Long projectId;
}
