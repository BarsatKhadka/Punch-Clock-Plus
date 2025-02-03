package com.punchClock.project.Modals.Jobs;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.punchClock.project.Modals.EmployeeEntity.EmployeeEntity;
import com.punchClock.project.Modals.TheUser;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class JobEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String jobName;
    private String jobDescription;

    @ManyToOne
    private TheUser createdByUser;

    @OneToMany(mappedBy = "jobEntity")
    @JsonBackReference
    private List<EmployeeEntity> employeeEntity;



}
