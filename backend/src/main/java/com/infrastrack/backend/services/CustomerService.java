package com.infrastrack.backend.services;

import com.infrastrack.backend.commons.AuthenticationManagement;
import com.infrastrack.backend.commons.Role;
import com.infrastrack.backend.commons.ServiceGeneric;
import com.infrastrack.backend.dto.CustomerDto;
import com.infrastrack.backend.mappers.CustomerMapper;
import com.infrastrack.backend.repositories.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomerService implements ServiceGeneric<CustomerDto> {

    private final CustomerRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final CustomerMapper mapper;
    private final AuthenticationManagement authenticationManagement;

    @Override
    public String login(CustomerDto dto) {
        return authenticationManagement.authenticateThenToken(dto);
    }

    @Override
    public String register(CustomerDto dto) {
        String rawPassword = dto.getPassword();

        dto.setPassword(passwordEncoder.encode(rawPassword));
        repository.save(mapper.toEntity(dto));

        dto.setPassword(rawPassword); 
        return authenticationManagement.authenticateThenToken(dto);
    }
}