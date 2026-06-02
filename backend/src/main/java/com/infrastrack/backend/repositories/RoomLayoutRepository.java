package com.infrastrack.backend.repositories;

import com.infrastrack.backend.commons.RepoGeneric;
import com.infrastrack.backend.models.RoomLayout;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomLayoutRepository extends RepoGeneric<RoomLayout> {
    java.util.List<RoomLayout> findAllByProjectId(long projectId);
}
