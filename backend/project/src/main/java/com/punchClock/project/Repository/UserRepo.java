package com.punchClock.project.Repository;

import com.punchClock.project.Modals.TheUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<TheUser,Integer> {
    TheUser findByUsername(String username);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}
