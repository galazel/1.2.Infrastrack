package com.infrastrack.backend.services;

import com.infrastrack.backend.models.VerificationCode;
import com.infrastrack.backend.repositories.VerificationCodeRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class VerificationService {

    private final VerificationCodeRepository repository;
    private final EmailService emailService;
    private final SecureRandom random = new SecureRandom();

    public void sendVerificationCode(String email) {
        repository.deleteByEmail(email);

        String code = String.valueOf(random.nextInt(90000000) + 10000000);

        VerificationCode verification = VerificationCode.builder()
                .email(email)
                .code(code)
                .expiresAt(LocalDateTime.now().plusMinutes(10))
                .used(false)
                .build();

        repository.save(verification);

        String body = String.format("Your verification code is %s. It expires in 10 minutes.", code);
        emailService.sendSimpleEmail(email, "Verification Code - InfrasTrack", body);
    }

    public boolean verifyCode(String email, String code) {
        Optional<VerificationCode> optional = repository.findByEmailAndCode(email, code);

        if (optional.isEmpty()) {
            throw new RuntimeException("Invalid verification code");
        }

        VerificationCode verification = optional.get();

        if (verification.isUsed()) {
            throw new RuntimeException("Verification code already used");
        }

        if (LocalDateTime.now().isAfter(verification.getExpiresAt())) {
            throw new RuntimeException("Verification code has expired");
        }

        verification.setUsed(true);
        repository.save(verification);

        repository.deleteByEmail(email);

        return true;
    }
}