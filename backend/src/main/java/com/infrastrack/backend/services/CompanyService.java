package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.AuthenticationManagement;
import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.dto.CompanyDto;
import com.infrastrack.backend.mappers.CompanyMapper;
import com.infrastrack.backend.mappers.CustomerMapper;
import com.infrastrack.backend.repositories.CompanyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class CompanyService implements ServiceGeneric<CompanyDto> {
    private final PasswordEncoder passwordEncoder;
    private final CompanyMapper mapper;
    private final AuthenticationManagement authenticationManagement;
    private final VerificationService verificationService;
    private final CompanyRepository companyRepository;

    @Override
    public String login(CompanyDto dto) {
        return authenticationManagement.authenticateThenToken(dto);
    }

    @Override
    public String register(CompanyDto dto , String code) throws Exception {
        if(verificationService.verifyCode(dto.getEmail(),code)){
            String rawPassword = dto.getPassword();
            dto.setPassword(passwordEncoder.encode(rawPassword));
            companyRepository.save(mapper.toEntity(dto));
            dto.setPassword(rawPassword);
            return authenticationManagement.authenticateThenToken(dto);
        }else
            throw new Exception("VERIFICATION FAILED");
    }

    @Override
    public void requestVerification(String email) {
        verificationService.sendVerificationCode(email);

    }

    @Override
    public long create(CompanyDto dto) {
        return 0;
    }

    @Override
    public String update(CompanyDto dto) {
        return "";
    }

    @Override
    public String delete(long id) {
        return "";
    }
}
