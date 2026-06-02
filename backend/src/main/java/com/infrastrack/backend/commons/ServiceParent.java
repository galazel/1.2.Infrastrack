package com.infrastrack.backend.commons;

import com.infrastrack.backend.services.S3Service;
import com.infrastrack.backend.services.VerificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;

@RequiredArgsConstructor
public class ServiceParent
{
    protected final PasswordEncoder passwordEncoder;
    protected final AuthenticationManagement authenticationManagement;
    protected final VerificationService verificationService;
    protected final S3Service s3Service;

    protected void requestVerification(String email) {
        verificationService.sendVerificationCode(email);
    }

}
