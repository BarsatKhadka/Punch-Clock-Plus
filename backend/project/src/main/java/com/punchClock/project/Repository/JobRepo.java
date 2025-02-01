package com.punchClock.project.Repository;

import com.punchClock.project.Modals.Jobs.JobEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepo extends JpaRepository<JobEntity, Integer> {
}
