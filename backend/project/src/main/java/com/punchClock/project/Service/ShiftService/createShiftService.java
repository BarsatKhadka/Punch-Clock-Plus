package com.punchClock.project.Service.ShiftService;

import com.punchClock.project.Repository.ShiftRepo;
import org.springframework.stereotype.Service;

@Service
public class createShiftService {
    private final ShiftRepo shiftRepo;
    public createShiftService(ShiftRepo shiftRepo) {
        this.shiftRepo = shiftRepo;
    }

}
