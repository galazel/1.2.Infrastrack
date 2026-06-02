package com.infrastrack.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class VerifyCodeDto {
    @NotBlank
    @Email
    private String email;

    @NotBlank
    @Size(min = 8, max = 8, message = "Code must be 8 digits")
    private String code;
}
