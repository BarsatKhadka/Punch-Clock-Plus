package com.punchClock.project.Repository;

import com.punchClock.project.Modals.ShiftEntity.ShiftEntity;
import com.punchClock.project.Modals.TheUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShiftRepo extends JpaRepository<ShiftEntity,Integer> {
    List<ShiftEntity> findAllByAdmin(TheUser admin);
}
