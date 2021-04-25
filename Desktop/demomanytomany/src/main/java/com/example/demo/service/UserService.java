package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void createUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
         userRepository.save(user);
    }

    public User getUser(Long id){
       return userRepository.findById(id).orElseThrow();
    }


    public void deleteUser(Long userId) {
        User user = userRepository.findById(userId).orElseThrow();
        userRepository.delete(user);
    }

    public String findUserName(String name){
        return userRepository.findName(name);
    }

}
