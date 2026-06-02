package com.infrastrack.backend.commons;

import com.infrastrack.backend.repositories.VerificationCodeRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
@Transactional
public class VerificationCodeCleanup {

    private final VerificationCodeRepository repository;

    @Scheduled(fixedRate = 3600000)
    public void deleteExpiredCodes() {
        repository.deleteByExpiresAtBefore(LocalDateTime.now());
    }
}
