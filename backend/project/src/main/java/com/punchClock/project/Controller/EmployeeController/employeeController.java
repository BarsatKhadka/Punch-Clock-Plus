package com.punchClock.project.Controller.EmployeeController;

import com.punchClock.project.DTO.EmployeeDTO.EmployeeDTO;
import com.punchClock.project.Modals.EmployeeEntity.EmployeeEntity;
import com.punchClock.project.Service.EmployeeService.createEmployeeService;
import com.punchClock.project.Service.EmployeeService.getAllEmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class employeeController {
    private final createEmployeeService employeeService;
    private final getAllEmployeeService getAllEmployeeService;

    public employeeController(createEmployeeService employeeService, getAllEmployeeService getAllEmployeeService) {
        this.employeeService = employeeService;
        this.getAllEmployeeService = getAllEmployeeService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createEmployee(@RequestBody EmployeeDTO employeeDTO) {
        try {
            EmployeeEntity employee = employeeService.createEmployee(employeeDTO);
            return ResponseEntity.ok(employee);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/getAllEmployees")
    public List<EmployeeEntity> getAllEmployees() {
        return getAllEmployeeService.getAllEmployees();
    }
}
