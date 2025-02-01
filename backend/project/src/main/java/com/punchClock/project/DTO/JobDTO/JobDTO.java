package com.punchClock.project.DTO.JobDTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JobDTO {
    private String jobName;
    private String jobDescription;
    public JobDTO(String jobName, String jobDescription) {
        this.jobName = jobName;
        this.jobDescription = jobDescription;
    }
}
