package com.punchClock.project.DTO.EmployeeDTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class EmployeeDTO {
    private String employeeName;
    private int employeePin;

    public EmployeeDTO(String employeeName, int employeePin) {
        this.employeeName = employeeName;
        this.employeePin = employeePin;
    }

    private String jobName;
}
