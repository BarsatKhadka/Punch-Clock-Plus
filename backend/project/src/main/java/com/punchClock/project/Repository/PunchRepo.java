package com.punchClock.project.Repository;

import com.punchClock.project.Modals.EmployeeEntity.EmployeeEntity;
import com.punchClock.project.Modals.PunchEntity.PunchEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PunchRepo extends JpaRepository<PunchEntity,Integer> {
    PunchEntity findTopByEmployeeEntityOrderByPunchStartTimeDesc(EmployeeEntity employeeEntity);
}
