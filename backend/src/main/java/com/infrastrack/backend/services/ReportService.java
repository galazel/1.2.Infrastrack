package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.AuthenticationManagement;
import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.commons.ServiceParent;
import com.infrastrack.backend.dto.ReportDto;
import com.infrastrack.backend.mappers.ReportMapper;
import com.infrastrack.backend.models.Report;
import com.infrastrack.backend.repositories.ReportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;

@Service
public class ReportService extends ServiceParent implements ServiceGeneric<ReportDto> {

    private final ReportRepository reportRepository;
    private final ReportMapper reportMapper;

    public ReportService(PasswordEncoder passwordEncoder, AuthenticationManagement authenticationManagement, VerificationService verificationService, S3Service s3Service, ReportRepository reportRepository, ReportMapper reportMapper, S3Service s3Service1) {
        super(passwordEncoder, authenticationManagement, verificationService, s3Service);
        this.reportRepository = reportRepository;
        this.reportMapper = reportMapper;
    }

    @Override
    public String login(ReportDto dto) {
        return "";
    }

    @Override
    public String register(ReportDto dto, String code, MultipartFile file) {
      return null;
    }

    @Override
    public void requestVerification(String email) {

    }

    @Override
    public long create(ReportDto dto) {
        try {
            Report r = reportRepository.save(reportMapper.toEntity(dto));
            return r.getId();
        }catch (Exception e){
            return 0;
        }
    }

    @Override
    public String update(ReportDto dto) {
        return "";
    }

    @Override
    public String delete(long id) {
        return "";
    }
}
