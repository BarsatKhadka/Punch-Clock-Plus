package com.punchClock.project.Service.EmployeeService;

import com.punchClock.project.DTO.EmployeeDTO.EmployeeDTO;
import com.punchClock.project.Modals.EmployeeEntity.EmployeeEntity;
import com.punchClock.project.Modals.TheUser;
import com.punchClock.project.Repository.EmployeeRepo;
import com.punchClock.project.Repository.UserRepo;
import com.punchClock.project.Utility.GetAuthenticatedUsername;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class getAllEmployeeService {
    private final EmployeeRepo employeeRepo;
    private final GetAuthenticatedUsername getAuthenticatedUsername;
    private final UserRepo userRepo;

    public getAllEmployeeService(EmployeeRepo employeeRepo, GetAuthenticatedUsername getAuthenticatedUsername, UserRepo userRepo) {
        this.employeeRepo = employeeRepo;
        this.getAuthenticatedUsername = getAuthenticatedUsername;
        this.userRepo = userRepo;
    }

    public List<EmployeeEntity> getAllEmployees(){
        String currentUser = getAuthenticatedUsername.getCurrentUsername();
        TheUser currentUserObject = userRepo.findByUsername(currentUser);
        return employeeRepo.findAllByTheAdmin(currentUserObject);

    }

}
