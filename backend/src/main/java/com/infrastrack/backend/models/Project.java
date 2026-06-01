package com.infrastrack.backend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "projects")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    private String projectType;

    private String address;

    @Min(0)
    private Integer noOfFloors;

    @PositiveOrZero
    private Double lotArea;

    @Column(length = 2000)
    private String description;

    private LocalDate startDate;

    private LocalDate endDate;

    @DecimalMin(value = "0.0", inclusive = true)
    private BigDecimal budget;

    private Long companyId;

    private String customerName;

    @Email
    private String customerEmail;

    private String customerContactNumber;

    private String customerAddress;
}
