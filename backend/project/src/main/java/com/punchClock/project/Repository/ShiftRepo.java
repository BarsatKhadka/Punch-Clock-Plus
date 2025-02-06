package com.punchClock.project.Repository;

import com.punchClock.project.Modals.ShiftEntity.ShiftEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShiftRepo extends JpaRepository<ShiftEntity,Integer> {
}
