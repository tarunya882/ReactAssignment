package com.example.demo.controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@WithMockUser(username = "tarunya",authorities = {"ROLE_ADMIN"})
public class HomeControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testHomePage()throws Exception{
        this.mockMvc.perform(MockMvcRequestBuilders.get("/"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.view().name("homepage"))
                .andExpect(MockMvcResultMatchers.forwardedUrl("/WEB-INF/jsp/homepage.jsp"));
    }

    @Test
    public void testAdminPage()throws Exception{
        this.mockMvc.perform(MockMvcRequestBuilders.get("/admin"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect((MockMvcResultMatchers.view().name("admin")))
                .andExpect(MockMvcResultMatchers.forwardedUrl("/WEB-INF/jsp/admin.jsp"));
    }

    @Test
    public void testUserPage()throws Exception{
        this.mockMvc.perform(MockMvcRequestBuilders.get("/user"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect((MockMvcResultMatchers.view().name("user")))
                .andExpect(MockMvcResultMatchers.forwardedUrl("/WEB-INF/jsp/user.jsp"));
    }
}
