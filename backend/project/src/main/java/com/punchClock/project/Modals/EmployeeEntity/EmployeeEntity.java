package com.punchClock.project.Modals.EmployeeEntity;

import com.punchClock.project.Modals.Jobs.JobEntity;
import com.punchClock.project.Modals.TheUser;
import jakarta.persistence.*;

@Entity
public class EmployeeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String employeeName;

    private int employeePin;

    @ManyToOne(cascade = CascadeType.ALL)
    private JobEntity jobEntity;

    @ManyToOne(cascade = CascadeType.ALL)
    private TheUser theUser;

}
