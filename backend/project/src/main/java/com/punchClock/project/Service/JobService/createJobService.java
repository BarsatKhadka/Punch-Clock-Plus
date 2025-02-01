package com.punchClock.project.Service.JobService;

import com.punchClock.project.DTO.JobDTO.JobDTO;
import com.punchClock.project.Modals.Jobs.JobEntity;
import com.punchClock.project.Repository.JobRepo;
import org.springframework.stereotype.Service;

@Service
public class createJobService {
    private final JobRepo jobRepo;
    public createJobService(JobRepo jobRepo) {
        this.jobRepo = jobRepo;
    }

    public JobEntity createJob(JobDTO jobDTO) {
        JobEntity newJobEntity = new JobEntity();
        newJobEntity.setJobName(jobDTO.getJobName());
        newJobEntity.setJobDescription(jobDTO.getJobDescription());
        jobRepo.save(newJobEntity);
        return newJobEntity;
    }

}
