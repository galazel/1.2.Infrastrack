package com.infrastrack.backend.services;

import com.infrastrack.backend.models.Company;
import com.infrastrack.backend.models.Customer;
import com.infrastrack.backend.repositories.CompanyRepository;
import com.infrastrack.backend.repositories.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final CustomerRepository customerRepository;
    private final CompanyRepository companyRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Optional<Customer> customer = customerRepository.findByEmail(email);
        if (customer.isPresent()) {
            return customer.get();
        }

        Optional<Company> company = companyRepository.findByEmail(email);
        if (company.isPresent()) {
            return company.get();
        }
        throw new UsernameNotFoundException("No account found with email: " + email);
    }
}
