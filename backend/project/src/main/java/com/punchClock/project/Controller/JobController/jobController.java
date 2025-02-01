package com.punchClock.project.Controller.JobController;

import com.punchClock.project.DTO.JobDTO.JobDTO;
import com.punchClock.project.Modals.Jobs.JobEntity;
import com.punchClock.project.Service.JobService.createJobService;
import com.punchClock.project.Service.JobService.getAllJobsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/job")
public class jobController {
    private final createJobService createJobService;
    private final getAllJobsService getAllJobsService;
    public jobController(createJobService createJobService , getAllJobsService getAllJobsService) {
        this.createJobService = createJobService;
        this.getAllJobsService = getAllJobsService;
    }

    @PostMapping("/create")
    public JobEntity createJob(@RequestBody JobDTO jobDTO) {
        return createJobService.createJob(jobDTO);
    }

    @GetMapping("/getAllJobs")
    public List<JobDTO> getAllJobs() {
        return getAllJobsService.getAllJobs();
    }

}
