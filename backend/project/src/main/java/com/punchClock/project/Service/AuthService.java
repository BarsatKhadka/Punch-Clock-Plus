package com.punchClock.project.Service;

import com.punchClock.project.Config.Jwt.JwtUtils;
import com.punchClock.project.DTO.LoginRequest;
import com.punchClock.project.DTO.SignUpRequest;
import com.punchClock.project.Modals.TheUser;
import com.punchClock.project.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    UserRepo userRepo;

    @Autowired
    private JwtUtils jwtUtils;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


    AuthenticationManager authenticationManager;



    public ResponseEntity<TheUser> register(SignUpRequest signUpRequest) {

        //creating a new user instance with the information of signup request.
        TheUser newUser = new TheUser(signUpRequest.getUsername(), signUpRequest.getEmail(), signUpRequest.getPassword());

        //get the normal password and encode it by Bcrypt before sending it to database
        newUser.setPassword(encoder.encode(signUpRequest.getPassword()));



        return new ResponseEntity<> (userRepo.save(newUser) , HttpStatus.CREATED);
    }


    public String loginVerify(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));



        //generate jwt token if authenticated
        if(authentication.isAuthenticated()) {
            return jwtUtils.generateToken(loginRequest.getUsername());
        }


        return "Invalid username or password";


    }
}
