package com.punchClock.project.Service.EmployeeService;

import com.punchClock.project.DTO.EmployeeDTO.EmployeeDTO;
import com.punchClock.project.Modals.EmployeeEntity.EmployeeEntity;
import com.punchClock.project.Modals.Jobs.JobEntity;
import com.punchClock.project.Modals.TheUser;
import com.punchClock.project.Repository.EmployeeRepo;
import com.punchClock.project.Repository.JobRepo;
import com.punchClock.project.Repository.UserRepo;
import com.punchClock.project.Utility.GetAuthenticatedUsername;
import org.springframework.stereotype.Service;

@Service
public class createEmployeeService {

    private final EmployeeRepo employeeRepo;
    private final JobRepo jobRepo;
    private final GetAuthenticatedUsername getAuthenticatedUsername;
    private final UserRepo userRepo;

    public createEmployeeService(EmployeeRepo employeeRepo, JobRepo jobRepo, GetAuthenticatedUsername getAuthenticatedUsername, UserRepo userRepo) {
        this.employeeRepo = employeeRepo;
        this.jobRepo = jobRepo;
        this.getAuthenticatedUsername = getAuthenticatedUsername;
        this.userRepo = userRepo;
    }

    public EmployeeEntity createEmployee(EmployeeDTO employeeDTO) {
        TheUser user = userRepo.findByUsername(getAuthenticatedUsername.getCurrentUsername());
        JobEntity job = jobRepo.findJobByCreatedByUserAndJobName(user, employeeDTO.getJobName());
        
        if (job == null) {
            throw new IllegalArgumentException("Job not found with name: " + employeeDTO.getJobName());
        }
        
        // Check if employee with same PIN already exists
        if (employeeRepo.existsByEmployeePin(employeeDTO.getEmployeePin())) {
            throw new IllegalArgumentException("Employee with PIN " + employeeDTO.getEmployeePin() + " already exists");
        }

        EmployeeEntity newEmployee = new EmployeeEntity();
        newEmployee.setEmployeeName(employeeDTO.getEmployeeName());
        newEmployee.setEmployeePin(employeeDTO.getEmployeePin());
        newEmployee.setJobEntity(job);
        newEmployee.setTheAdmin(user);
        employeeRepo.save(newEmployee);
        return newEmployee;
    }
}
