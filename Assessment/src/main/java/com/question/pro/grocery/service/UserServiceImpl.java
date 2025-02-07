package com.question.pro.grocery.service;

import com.question.pro.grocery.model.User;
import com.question.pro.grocery.repository.UserRepository;
import com.question.pro.grocery.request.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public String registerUser(UserDto userDto) {
        if (userRepository.existsByEmail(userDto.getEmail())) {
            return "Error: Username is already taken!";
        }
        // Create new user's account
        User newUser = new User();
        newUser.setName(userDto.getName());
        newUser.setEmail(userDto.getEmail());
        newUser.setPassword(userDto.getPassword());
        newUser.setRole(userDto.getRole());
        userRepository.save(newUser);
        return "User registered successfully!";
    }

    @Override
    public User authenticateUser(UserDto userDto) {
        User user=userRepository.findByEmailAndPassword(userDto.getEmail(),userDto.getPassword());
        if(user!=null){
            return user;
        }
        return null;
    }
}
