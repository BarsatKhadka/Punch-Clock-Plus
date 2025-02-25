package com.punchClock.project.DTO.PunchDTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class PunchDTO {
    private Integer employeePin;
    private String jobName;
    private String punchType; // "IN" or "OUT"
} 