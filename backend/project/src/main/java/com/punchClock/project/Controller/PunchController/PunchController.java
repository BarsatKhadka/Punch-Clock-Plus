package com.punchClock.project.Controller.PunchController;

import com.punchClock.project.DTO.PunchDTO.PunchDTO;
import com.punchClock.project.Service.PunchService.createPunchService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/punch")
public class PunchController {
    private final createPunchService punchService;

    public PunchController(createPunchService punchService) {
        this.punchService = punchService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createPunch(@RequestBody PunchDTO punchDTO) {
        return punchService.createPunch(punchDTO);
    }
} 