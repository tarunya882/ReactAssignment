package com.example.demo.controller;


import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class LoginTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    UserRepository userRepository;

    @Test
    public void testSignUpPage()throws Exception{
        this.mockMvc.perform(MockMvcRequestBuilders.post("/addUser")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .with(SecurityMockMvcRequestPostProcessors.csrf())
                .param("name","")
                .param("password","ravi123")
                .sessionAttr("adduser",new User()))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.view().name("signUp"))
                .andExpect(MockMvcResultMatchers.forwardedUrl("/WEB-INF/jsp/signUp.jsp"))
                .andExpect(MockMvcResultMatchers.model().attributeHasFieldErrors("adduser", "name"))
                .andExpect(MockMvcResultMatchers.model().attribute("adduser", Matchers.hasProperty("name",Matchers.notNullValue())));
    }
}
