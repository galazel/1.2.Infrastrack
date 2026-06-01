package com.infrastrack.backend.repositories;

import com.infrastrack.backend.commons.RepoGeneric;
import org.springframework.data.jpa.repository.JpaRepository;
import com.infrastrack.backend.models.FloorPlan;
import org.springframework.stereotype.Repository;

@Repository
public interface FloorPlanRepository extends RepoGeneric<FloorPlan> {
}
