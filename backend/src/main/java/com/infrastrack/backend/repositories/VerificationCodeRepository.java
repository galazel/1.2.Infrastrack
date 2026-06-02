package com.infrastrack.backend.repositories;

import com.infrastrack.backend.commons.RepoGeneric;
import com.infrastrack.backend.models.VerificationCode;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface VerificationCodeRepository extends RepoGeneric<VerificationCode> {
    Optional<VerificationCode> findByEmailAndCode(String email, String code);
    void deleteByEmail(String email);
    void deleteByExpiresAtBefore(LocalDateTime now);
}
