package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.AuthenticationManagement;
import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.dto.CustomerDto;
import com.infrastrack.backend.mappers.CustomerMapper;
import com.infrastrack.backend.models.Customer;
import com.infrastrack.backend.repositories.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerService implements ServiceGeneric<CustomerDto> {

    private final CustomerRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final CustomerMapper mapper;
    private final AuthenticationManagement authenticationManagement;
    private final VerificationService verificationService;

    @Override
    public String login(CustomerDto dto) {
        return authenticationManagement.authenticateThenToken(dto);
    }

    @Override
    public String register(CustomerDto dto, String code) throws Exception {
        if(verificationService.verifyCode(dto.getEmail(),code)){
            String rawPassword = dto.getPassword();
            dto.setPassword(passwordEncoder.encode(rawPassword));
            repository.save(mapper.toEntity(dto));
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
    public long create(CustomerDto dto) {
        return 0;
    }

    @Override
    public String update(CustomerDto dto) {
        return "";
    }

    @Override
    public String delete(long id) {
        return "";
    }

    public long getCustomerId(String email){
        Optional<Customer> customerOptional = repository.findByEmail(email);
        return customerOptional.isPresent() ? customerOptional.get().getId() : 0;
    }
    public String getCustomerName(String email){
        Optional<Customer> customerOptional = repository.findByEmail(email);
        return customerOptional.map(customer -> customer.getFirstName() + " " + customer.getLastName()).orElse(null);
    }


}