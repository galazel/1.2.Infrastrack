package com.infrastrack.backend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "blueprints")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Blueprint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "the key for blueprint should not be blank")
    private String key;

    @NotNull(message = "projectId should not be null")
    private Long projectId;

    @NotNull(message = "description should not be null")
    private String description;
}
