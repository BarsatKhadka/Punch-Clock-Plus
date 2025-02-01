package com.punchClock.project.Service.JobService;

import com.punchClock.project.DTO.JobDTO.JobDTO;
import com.punchClock.project.Modals.TheUser;
import com.punchClock.project.Repository.JobRepo;
import com.punchClock.project.Repository.UserRepo;
import com.punchClock.project.Utility.GetAuthenticatedUsername;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class getAllJobsService {
    private final JobRepo jobRepo;
    private final UserRepo userRepo;
    private final GetAuthenticatedUsername getAuthenticatedUsername;

    public getAllJobsService(JobRepo jobRepo, UserRepo userRepo, GetAuthenticatedUsername getAuthenticatedUsername) {
        this.jobRepo = jobRepo;
        this.userRepo = userRepo;
        this.getAuthenticatedUsername = getAuthenticatedUsername;
    }


    public List<JobDTO> getAllJobs() {
        TheUser theUser = userRepo.findByUsername(getAuthenticatedUsername.getCurrentUsername());
        return jobRepo.findAllByCreatedByUser(theUser)
                .stream()
                .map(jobEntity -> new JobDTO(jobEntity.getJobName(), jobEntity.getJobDescription()))
                .collect(Collectors.toList());
    }


}
