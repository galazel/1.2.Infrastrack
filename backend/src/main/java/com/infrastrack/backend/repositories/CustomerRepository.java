package com.infrastrack.backend.repositories;

import com.infrastrack.backend.commons.RepoGeneric;
import org.springframework.data.jpa.repository.JpaRepository;
import com.infrastrack.backend.models.Customer;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerRepository extends RepoGeneric<Customer> {
    Optional<Customer> findByEmail(String email);
}
