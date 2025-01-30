package com.punchClock.project.Repository;

import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<TheUser,Integer>{
}
