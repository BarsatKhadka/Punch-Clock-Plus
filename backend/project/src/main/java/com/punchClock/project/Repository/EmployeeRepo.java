package com.punchClock.project.Repository;

import com.punchClock.project.Modals.EmployeeEntity.EmployeeEntity;
import com.punchClock.project.Modals.TheUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepo extends JpaRepository<EmployeeEntity,Integer> {
    List<EmployeeEntity> findAllByTheAdmin(TheUser theAdmin);
    EmployeeEntity findByEmployeePin(Integer employeePin);
}
