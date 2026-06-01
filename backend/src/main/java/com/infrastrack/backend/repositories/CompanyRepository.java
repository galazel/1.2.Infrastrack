package com.infrastrack.backend.repositories;

import com.infrastrack.backend.commons.RepoGeneric;
import com.infrastrack.backend.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import com.infrastrack.backend.models.Company;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CompanyRepository extends RepoGeneric<Company> {
    Optional<Company> findByEmail(String email);

}
