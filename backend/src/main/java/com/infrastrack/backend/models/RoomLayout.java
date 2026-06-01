package com.infrastrack.backend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Entity
@Table(name = "room_layouts")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RoomLayout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String bucketName;

    @NotNull
    private Long projectId;
}
