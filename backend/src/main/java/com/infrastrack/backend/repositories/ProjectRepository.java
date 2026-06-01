package com.infrastrack.backend.repositories;

import com.infrastrack.backend.commons.RepoGeneric;
import org.springframework.data.jpa.repository.JpaRepository;
import com.infrastrack.backend.models.Project;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends RepoGeneric<Project> {
}
