package com.infrastrack.backend.dto;

import com.infrastrack.backend.commons.AuthCredentials;
import lombok.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CustomerDto implements AuthCredentials{
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String profile;
    private String password;
}