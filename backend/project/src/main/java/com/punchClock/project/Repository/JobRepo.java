package com.punchClock.project.Repository;

import com.punchClock.project.Modals.Jobs.JobEntity;
import com.punchClock.project.Modals.TheUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
public interface JobRepo extends JpaRepository<JobEntity, Integer> {
    List<JobEntity> findAllByCreatedByUser(TheUser user);
}
