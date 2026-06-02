package com.infrastrack.backend.repositories;

import com.infrastrack.backend.commons.RepoGeneric;
import com.infrastrack.backend.models.Blueprint;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlueprintRepository extends RepoGeneric<Blueprint> {
    List<Blueprint> findAllByProjectId(long projectId);
}
