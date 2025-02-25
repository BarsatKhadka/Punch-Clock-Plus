package com.punchClock.project.Service.PunchService;

import com.punchClock.project.DTO.PunchDTO.PunchDTO;
import com.punchClock.project.Modals.EmployeeEntity.EmployeeEntity;
import com.punchClock.project.Modals.Jobs.JobEntity;
import com.punchClock.project.Modals.PunchEntity.PunchEntity;
import com.punchClock.project.Repository.EmployeeRepo;
import com.punchClock.project.Repository.JobRepo;
import com.punchClock.project.Repository.PunchRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class createPunchService {
    private final PunchRepo punchRepo;
    private final EmployeeRepo employeeRepo;
    private final JobRepo jobRepo;

    public createPunchService(PunchRepo punchRepo, EmployeeRepo employeeRepo, JobRepo jobRepo) {
        this.punchRepo = punchRepo;
        this.employeeRepo = employeeRepo;
        this.jobRepo = jobRepo;
    }

    public ResponseEntity<?> createPunch(PunchDTO punchDTO) {
        // Find employee by PIN
        EmployeeEntity employee = employeeRepo.findByEmployeePin(punchDTO.getEmployeePin());
        if (employee == null) {
            return ResponseEntity.badRequest().body("Invalid employee PIN");
        }

        // Find job
        JobEntity job = employee.getJobEntity();
        if (job == null || !job.getJobName().equals(punchDTO.getJobName())) {
            return ResponseEntity.badRequest().body("Invalid job for employee");
        }

        PunchEntity punch = new PunchEntity();
        punch.setEmployeeEntity(employee);
        punch.setJobEntity(job);

        if (punchDTO.getPunchType().equals("IN")) {
            punch.setPunchStartTime(LocalDateTime.now());
        } else if (punchDTO.getPunchType().equals("OUT")) {
            // Find the latest punch for this employee
            PunchEntity lastPunch = punchRepo.findTopByEmployeeEntityOrderByPunchStartTimeDesc(employee);
            if (lastPunch != null && lastPunch.getPunchEndTime() == null) {
                lastPunch.setPunchEndTime(LocalDateTime.now());
                return ResponseEntity.ok(punchRepo.save(lastPunch));
            } else {
                return ResponseEntity.badRequest().body("No active punch found");
            }
        }

        return ResponseEntity.ok(punchRepo.save(punch));
    }
}
