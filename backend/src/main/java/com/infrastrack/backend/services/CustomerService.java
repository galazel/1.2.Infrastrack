package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.AuthCredentials;
import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.commons.ServiceParent;
import com.infrastrack.backend.dto.CustomerDto;
import com.infrastrack.backend.mappers.CustomerMapper;
import com.infrastrack.backend.models.Customer;
import com.infrastrack.backend.repositories.CustomerRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@Service
public class CustomerService extends ServiceParent implements ServiceGeneric<CustomerDto> {

    private final CustomerRepository repository;
    private final CustomerMapper mapper;

    public CustomerService(CustomerRepository repository, S3Service s3Service, CustomerMapper mapper) {
        super(s3Service);
        this.repository = repository;
        this.mapper = mapper;
    }


    public long getCustomerId(String email){
        Optional<Customer> customerOptional = repository.findByEmail(email);
        return customerOptional.isPresent() ? customerOptional.get().getId() : 0;
    }
    public String getCustomerName(String email){
        Optional<Customer> customerOptional = repository.findByEmail(email);
        return customerOptional.map(customer -> customer.getFirstName() + " " + customer.getLastName()).orElse(null);
    }

    @Override
    public long create(CustomerDto dto) {
        return 0;
    }

    @Override
    public String login(CustomerDto dto) {
//        return super.authenticationManagement.authenticateThenToken((AuthCredentials) dto);
        return "";
    }

    @Override
    public String register(CustomerDto dto, String code, MultipartFile file) throws Exception {
//        if(verificationService.verifyCode(dto.getEmail(),code)){
//            String rawPassword = dto.getPassword();
//            dto.setPassword(passwordEncoder.encode(rawPassword));
//            dto.setProfile(s3Service.upload(file,"profiles",0));
//            repository.save(mapper.toEntity(dto));
//            dto.setPassword(rawPassword);
//            return authenticationManagement.authenticateThenToken(dto);
//        }else
//            throw new Exception("VERIFICATION FAILED");
        return "";
    }

    @Override
    public String update(CustomerDto dto) {
        return "";
    }

    @Override
    public String delete(long id) {
        return "";
    }

}