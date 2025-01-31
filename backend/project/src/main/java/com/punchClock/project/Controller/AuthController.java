package com.punchClock.project.Controller;

import com.punchClock.project.Config.Jwt.JwtUtils;
import com.punchClock.project.DTO.LoginRequest;
import com.punchClock.project.DTO.SignUpRequest;
import com.punchClock.project.Repository.UserRepo;
import com.punchClock.project.Service.AuthService;
import com.punchClock.project.Service.MyUserDetailsService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {


    private final AuthService authService;
    private final UserRepo userRepo;
    private final MyUserDetailsService userDetailsService;


    @Autowired
    AuthenticationManager authenticationManager;

    public AuthController(AuthService authService, UserRepo userRepo , MyUserDetailsService userDetailsService) {
        this.authService = authService;
        this.userRepo = userRepo;
        this.userDetailsService = userDetailsService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody SignUpRequest signUpRequest) {

        if(userRepo.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity.badRequest().body("Email already exists in the database.");
        }

        if(userRepo.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity.badRequest().body("Username already exists in the database.");
        }

        authService.register(signUpRequest);

        return ResponseEntity.ok("You are registered successfully.");
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        return authService.loginVerify(loginRequest);

    }



}
