package com.punchClock.project.Modals.EmployeeEntity;

import com.punchClock.project.Modals.Jobs.JobEntity;
import jakarta.persistence.*;

@Entity
public class EmployeeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String employeeName;

    @ManyToOne(cascade = CascadeType.ALL)
    private JobEntity jobEntity;

}
