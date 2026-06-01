package com.infrastrack.backend.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectDto {
    private Long id;
    private String name;
    private String projectType;
    private String address;
    private Integer noOfFloors;
    private Double lotArea;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private BigDecimal budget;
    private Long companyId;
    private String customerName;
    private String customerEmail;
    private String customerContactNumber;
    private String customerAddress;
}