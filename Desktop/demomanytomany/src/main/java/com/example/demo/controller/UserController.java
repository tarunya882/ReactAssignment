package com.example.demo.controller;

import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
@RequestMapping("/admin")
public class UserController {
    @Autowired
    UserService userService;



    @GetMapping("/users")
    public ModelAndView getAllUsers(Model model){
        model.addAttribute("users",userService.getAllUsers());
        return new ModelAndView("users");
    }


    @GetMapping(value = "/deleteUser/{id}")
    public ModelAndView deleteQuestion(@PathVariable Long id){
        userService.deleteUser(id);
        return  new ModelAndView("redirect:/admin/users");
    }

}




