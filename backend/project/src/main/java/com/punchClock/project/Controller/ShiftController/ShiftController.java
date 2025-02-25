package com.punchClock.project.Controller.ShiftController;

import com.punchClock.project.Modals.ShiftEntity.ShiftEntity;
import com.punchClock.project.Service.ShiftService.createShiftService;
import com.punchClock.project.Service.ShiftService.getShiftService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shift")
public class ShiftController {

    private final getShiftService getShiftService;
    private final createShiftService createShiftService;
    
    public ShiftController(createShiftService createShiftService, getShiftService getShiftService) {
        this.createShiftService = createShiftService;
        this.getShiftService = getShiftService;
    }

    @PostMapping("/create")
    public ShiftEntity createShift(@RequestBody ShiftEntity shiftEntity) {
        return createShiftService.createShift(shiftEntity);
    }

    @GetMapping("/getAllShifts")
    public List<ShiftEntity> getAllShifts() {
        return getShiftService.getAllShiftEntity();
    }
}
