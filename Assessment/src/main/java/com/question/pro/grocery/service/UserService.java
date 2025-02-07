package com.question.pro.grocery.service;

import com.question.pro.grocery.model.User;
import com.question.pro.grocery.request.UserDto;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    String registerUser(UserDto userDto);

    User authenticateUser(UserDto userDto);
}
