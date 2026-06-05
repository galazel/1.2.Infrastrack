package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.commons.ServiceParent;
import com.infrastrack.backend.dto.CompanyDto;
import com.infrastrack.backend.mappers.CompanyMapper;
import com.infrastrack.backend.repositories.CompanyRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class CompanyService extends ServiceParent implements ServiceGeneric<CompanyDto> {

    private final CompanyRepository repository;
    private final CompanyMapper mapper;

    public CompanyService(CompanyRepository repository, S3Service s3Service, CompanyMapper mapper) {
        super(s3Service);
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public long create(CompanyDto dto) {
        return 0;
    }

    @Override
    public String login(CompanyDto dto) {
        return "";
    }

    @Override
    public String register(CompanyDto dto, String code, MultipartFile file) throws Exception {
//        if(verificationService.verifyCode(dto.getEmail(),code)){
//            String rawPassword = dto.getPassword();
//            dto.setPassword(super.passwordEncoder.encode(rawPassword));
//            dto.setProfile(super.s3Service.upload(file,"profiles",0));
//            repository.save(mapper.toEntity(dto));
//            dto.setPassword(rawPassword);
//            return authenticationManagement.authenticateThenToken(dto);
//        }else
//            throw new Exception("VERIFICATION FAILED");
        return "";
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
