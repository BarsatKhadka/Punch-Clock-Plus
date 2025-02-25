package com.punchClock.project.Modals.PunchEntity;

import com.punchClock.project.Modals.EmployeeEntity.EmployeeEntity;
import com.punchClock.project.Modals.Jobs.JobEntity;
import com.punchClock.project.Modals.ShiftEntity.ShiftEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class PunchEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private LocalDateTime punchStartTime;
    private LocalDateTime punchEndTime;

    @OneToOne
    private JobEntity jobEntity;

    @OneToOne
    private EmployeeEntity employeeEntity;

    @OneToOne
    private ShiftEntity shiftEntity;



}
