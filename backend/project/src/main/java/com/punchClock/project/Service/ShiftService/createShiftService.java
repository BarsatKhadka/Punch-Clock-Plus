package com.punchClock.project.Service.ShiftService;

import com.punchClock.project.Modals.EmployeeEntity.EmployeeEntity;
import com.punchClock.project.Modals.ShiftEntity.ShiftEntity;
import com.punchClock.project.Modals.TheUser;
import com.punchClock.project.Repository.ShiftRepo;
import com.punchClock.project.Repository.UserRepo;
import com.punchClock.project.Utility.GetAuthenticatedUsername;
import org.springframework.stereotype.Service;

@Service
public class createShiftService {
    private final ShiftRepo shiftRepo;
    private final UserRepo userRepo;
    private final GetAuthenticatedUsername getAuthenticatedUsername;

    public createShiftService(ShiftRepo shiftRepo, UserRepo userRepo, GetAuthenticatedUsername getAuthenticatedUsername) {
        this.shiftRepo = shiftRepo;
        this.userRepo = userRepo;
        this.getAuthenticatedUsername = getAuthenticatedUsername;
    }

    public ShiftEntity createShift(ShiftEntity shiftEntity) {
        TheUser user = userRepo.findByUsername(getAuthenticatedUsername.getCurrentUsername());

        ShiftEntity shift = new ShiftEntity();
        shift.setShiftName(shiftEntity.getShiftName());
        shift.setShiftTime(shiftEntity.getShiftTime());
        shift.setAdmin(user);
        for(EmployeeEntity employeeEntity: shiftEntity.getEmployees()){
            shift.getEmployees().add(employeeEntity);
        }

        shiftRepo.save(shift);
        return shift;
    }

}
