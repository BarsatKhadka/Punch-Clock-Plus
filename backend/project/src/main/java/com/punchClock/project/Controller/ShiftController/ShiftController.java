package com.punchClock.project.Controller.ShiftController;

import com.punchClock.project.Modals.ShiftEntity.ShiftEntity;
import com.punchClock.project.Service.ShiftService.createShiftService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShiftController {

    private createShiftService Create_shiftService;
    public ShiftController(createShiftService createShiftService) {
        this.Create_shiftService = createShiftService;
    }

    @PostMapping("/create")
    public ShiftEntity createShift(@RequestBody ShiftEntity shiftEntity) {
        return Create_shiftService.createShift(shiftEntity);
    }




}
