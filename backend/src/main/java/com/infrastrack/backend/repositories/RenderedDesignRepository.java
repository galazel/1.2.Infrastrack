package com.infrastrack.backend.repositories;

import com.infrastrack.backend.commons.RepoGeneric;
import org.springframework.data.jpa.repository.JpaRepository;
import com.infrastrack.backend.models.RenderedDesign;
import org.springframework.stereotype.Repository;

@Repository
public interface RenderedDesignRepository extends RepoGeneric<RenderedDesign> {
    java.util.List<RenderedDesign> findAllByProjectId(long projectId);
}
