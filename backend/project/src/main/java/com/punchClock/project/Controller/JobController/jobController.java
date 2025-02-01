package com.punchClock.project.Controller.JobController;

import com.punchClock.project.DTO.JobDTO.JobDTO;
import com.punchClock.project.Modals.Jobs.JobEntity;
import com.punchClock.project.Service.JobService.createJobService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/job")
public class jobController {
    private final createJobService createJobService;
    public jobController(createJobService createJobService) {
        this.createJobService = createJobService;
    }

    @PostMapping("/create")
    public JobEntity createJob(@RequestBody JobDTO jobDTO) {
        return createJobService.createJob(jobDTO);
    }

}
