package com.punchClock.project.Controller;

import com.punchClock.project.DTO.LoginRequest;
import com.punchClock.project.DTO.SignUpRequest;
import com.punchClock.project.Modals.AuthResponse;
import com.punchClock.project.Repository.UserRepo;
import com.punchClock.project.Service.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {


    private final AuthService authService;
    private final UserRepo userRepo;

    public AuthController(AuthService authService, UserRepo userRepo) {
        this.authService = authService;
        this.userRepo = userRepo;
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
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {

        AuthResponse authResposne = new AuthResponse();

        if(userRepo.existsByUsername(loginRequest.getUsername()) & authService.loginVerify(loginRequest) == "Invalid username or password") {
            authResposne.setMessage("Invalid username or password");
            return ResponseEntity.badRequest().body(authResposne);
        }
        else{
            authResposne.setMessage("Logged in");
            authResposne.setJwtToken(authService.loginVerify(loginRequest));
            return ResponseEntity.ok(authResposne);
        }


    }



}
