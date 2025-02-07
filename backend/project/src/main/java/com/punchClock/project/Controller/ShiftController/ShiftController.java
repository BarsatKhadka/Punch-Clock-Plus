package com.punchClock.project.Controller.ShiftController;

import com.punchClock.project.Modals.ShiftEntity.ShiftEntity;
import com.punchClock.project.Service.ShiftService.createShiftService;
import com.punchClock.project.Service.ShiftService.getShiftService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ShiftController {

    private final com.punchClock.project.Service.ShiftService.getShiftService getShiftService;
    private createShiftService Create_shiftService;
    public ShiftController(createShiftService createShiftService, getShiftService getShiftService) {
        this.Create_shiftService = createShiftService;
        this.getShiftService = getShiftService;
    }

    @PostMapping("/create")
    public ShiftEntity createShift(@RequestBody ShiftEntity shiftEntity) {
        return Create_shiftService.createShift(shiftEntity);
    }

    @GetMapping("/getAllShifts")
    public List<ShiftEntity> getAllShifts() {
        return getShiftService.getAllShiftEntity();
    }








}
