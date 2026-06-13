package com.doener.doener.features.helloWorld;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @RequestMapping("/")
public class HelloWorldController {

    @GetMapping("/")
    public String hello() {

        return "Hello Public";
    }

    @GetMapping("/secure")
    public String helloSecuree() {

        return "Hello Secure";
    }

}
