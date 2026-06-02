package com.infrastrack.backend.repositories;

import com.infrastrack.backend.commons.RepoGeneric;
import com.infrastrack.backend.models.FloorPlan;
import org.springframework.stereotype.Repository;

@Repository
public interface FloorPlanRepository extends RepoGeneric<FloorPlan> {
    java.util.List<FloorPlan> findAllByProjectId(long projectId);
}
