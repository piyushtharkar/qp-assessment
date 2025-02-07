package com.question.pro.grocery.controller;

import com.question.pro.grocery.model.User;

import com.question.pro.grocery.request.UserDto;
import com.question.pro.grocery.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String registerUser(@RequestBody UserDto userDto) {
        return userService.registerUser(userDto);
    }

    @PostMapping("/signin")
    public User authenticateUser(@RequestBody UserDto userDto) {
        return userService.authenticateUser(userDto);
    }
}
