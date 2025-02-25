package com.punchClock.project.Modals.EmployeeEntity;

import com.punchClock.project.Modals.Jobs.JobEntity;
import com.punchClock.project.Modals.PunchEntity.PunchEntity;
import com.punchClock.project.Modals.ShiftEntity.ShiftEntity;
import com.punchClock.project.Modals.TheUser;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class EmployeeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String employeeName;

    private int employeePin;

    @ManyToOne(cascade = CascadeType.ALL)
    private JobEntity jobEntity;

    @ManyToOne(cascade = CascadeType.ALL)
    private TheUser theAdmin;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<ShiftEntity> shiftEntityList;

    @OneToOne
    private PunchEntity punchEntity;


}
