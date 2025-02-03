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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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

    @PostMapping("/create")
    public EmployeeEntity createEmployee(@RequestBody EmployeeDTO employeeDTO) {
        TheUser user = userRepo.findByUsername(getAuthenticatedUsername.getCurrentUsername());
        JobEntity job = jobRepo.findJobByCreatedByUserAndJobName(user, employeeDTO.getJobName());

        EmployeeEntity newEmployee = new EmployeeEntity();
        newEmployee.setEmployeeName(employeeDTO.getEmployeeName());
        newEmployee.setEmployeePin(employeeDTO.getEmployeePin());
        newEmployee.setJobEntity(job);
        //employees user is the admin
        newEmployee.setTheAdmin(user);
        employeeRepo.save(newEmployee);
        return newEmployee;

    }


}
