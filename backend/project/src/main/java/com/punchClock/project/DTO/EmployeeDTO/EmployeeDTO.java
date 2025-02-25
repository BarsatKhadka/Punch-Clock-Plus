package com.punchClock.project.DTO.EmployeeDTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@Data
@NoArgsConstructor
public class EmployeeDTO {
    private String employeeName;
    private int employeePin;
    private String jobName;

    public EmployeeDTO(String employeeName, int employeePin, String jobName) {
        this.employeeName = employeeName;
        this.employeePin = employeePin;
        this.jobName = jobName;
    }
}
