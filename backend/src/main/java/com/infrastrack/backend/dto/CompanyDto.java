package com.infrastrack.backend.dto;

import com.infrastrack.backend.commons.AuthCredentials;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CompanyDto implements AuthCredentials {
    private Long id;
    private String name;
    private String email;
    private String contactNumber;
    private String companyAddress;
    private String licensedNumber;
    private String description;
    private String profile;
    private String password;
}