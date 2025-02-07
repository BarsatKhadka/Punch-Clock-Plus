package com.punchClock.project.Service.ShiftService;

import com.punchClock.project.Modals.ShiftEntity.ShiftEntity;
import com.punchClock.project.Modals.TheUser;
import com.punchClock.project.Repository.ShiftRepo;
import com.punchClock.project.Repository.UserRepo;
import com.punchClock.project.Utility.GetAuthenticatedUsername;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Getter
@Setter
public class getShiftService {
    private final ShiftRepo shiftRepo;
    private final GetAuthenticatedUsername getAuthenticatedUsername;
    private final UserRepo userRepo;

    public getShiftService(ShiftRepo shiftRepo, GetAuthenticatedUsername getAuthenticatedUsername, UserRepo userRepo) {
        this.shiftRepo = shiftRepo;
        this.getAuthenticatedUsername = getAuthenticatedUsername;
        this.userRepo = userRepo;
    }
    
    public List<ShiftEntity> getAllShiftEntity() {
        TheUser user = userRepo.findByUsername(getAuthenticatedUsername.getCurrentUsername());
        return shiftRepo.findAllByAdmin(user);
    }
}
