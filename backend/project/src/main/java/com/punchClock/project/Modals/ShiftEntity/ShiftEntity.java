package com.punchClock.project.Modals.ShiftEntity;

import com.punchClock.project.Modals.EmployeeEntity.EmployeeEntity;
import com.punchClock.project.Modals.TheUser;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class ShiftEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer shiftId;

    private String shiftName;
    private String shiftTime;

    @ManyToMany
    private List<EmployeeEntity> employees;

    @ManyToOne
    private TheUser admin;
}
