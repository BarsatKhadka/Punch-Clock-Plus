package com.punchClock.project.Service.JobService;

import com.punchClock.project.DTO.JobDTO.JobDTO;
import com.punchClock.project.Modals.Jobs.JobEntity;
import com.punchClock.project.Modals.TheUser;
import com.punchClock.project.Repository.JobRepo;
import com.punchClock.project.Repository.UserRepo;
import com.punchClock.project.Utility.GetAuthenticatedUsername;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class createJobService {
    private final JobRepo jobRepo;
    private final UserRepo userRepo;
    private final GetAuthenticatedUsername getAuthenticatedUsername;

    public createJobService(JobRepo jobRepo, UserRepo userRepo, GetAuthenticatedUsername getAuthenticatedUsername) {
        this.jobRepo = jobRepo;
        this.userRepo = userRepo;
        this.getAuthenticatedUsername = getAuthenticatedUsername;
    }

    public ResponseEntity<?> createJob(JobDTO jobDTO) {
        TheUser user = userRepo.findByUsername(getAuthenticatedUsername.getCurrentUsername());


        boolean jobExists = jobRepo.existsByCreatedByUserAndJobName(user, jobDTO.getJobName());
        if (!jobExists) {
            JobEntity newJobEntity = new JobEntity();
            newJobEntity.setJobName(jobDTO.getJobName());
            newJobEntity.setJobDescription(jobDTO.getJobDescription());
            newJobEntity.setCreatedByUser(user);
            jobRepo.save(newJobEntity);
            return ResponseEntity.ok(newJobEntity);
        }
        return ResponseEntity.ok("duplicate");

    }

}
