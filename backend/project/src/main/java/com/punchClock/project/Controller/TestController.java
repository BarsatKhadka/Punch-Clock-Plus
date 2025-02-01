package com.punchClock.project.Controller;

import com.punchClock.project.Utility.GetAuthenticatedUsername;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @Autowired
    private GetAuthenticatedUsername getAuthenticatedUsername;

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }
    @GetMapping("/helloAuthenticate")
    public String helloAuthenticate() {
        return "helloAuthenticate";
    }
    @GetMapping("/current")
    public String current() {
        return getAuthenticatedUsername.getCurrentUsername();
    }
}
