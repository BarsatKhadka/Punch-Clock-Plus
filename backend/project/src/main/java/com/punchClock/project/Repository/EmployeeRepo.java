package com.punchClock.project.Repository;

import com.punchClock.project.Modals.EmployeeEntity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo extends JpaRepository<EmployeeEntity,Integer> {
}
