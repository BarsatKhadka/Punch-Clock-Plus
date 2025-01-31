package com.punchClock.project.Modals;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class TheUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false )  //username can't be null
    private String username;

    @Column(unique = true)
    private String email;

    @JsonIgnore
    private String password;

    private boolean isEnabled;


    public TheUser(String username ,String email , String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public TheUser() {

    }
}
