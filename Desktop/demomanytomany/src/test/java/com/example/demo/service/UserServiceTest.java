package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;

import java.util.ArrayList;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
@SpringBootTest
@ExtendWith(MockitoExtension.class)
@WithMockUser(username = "tarunya", authorities = {"ROLE_ADMIN"})
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Test
    public void testGetAllUsers()throws Exception{
        List<User> userList=new ArrayList<>();
        User user=new User("robin","secret");
        userList.add(user);
        Mockito.when(userRepository.findAll()).thenReturn(userList);
        List<User>allUsers=userService.getAllUsers();
        System.out.println(allUsers);
        Assertions.assertNotEquals("",allUsers.get(0).getName());
        Mockito.verify(userRepository, Mockito.times(1)).findAll();

    }

    @Test
    public void testCreateUser()throws Exception{
        User user=new User("hi","how");
        userService.createUser(user);
        Mockito.verify(userRepository,Mockito.times(1)).save(Mockito.any(User.class));

    }

    @Test
    public void testFindById()throws Exception{
        Mockito.when(userRepository.findById(1L)).thenReturn(java.util.Optional.of(new User()));
        Assertions.assertNotNull(userService.getUser(1L));
    }

    @Test
    public void deleteUserByIdTest()throws Exception{
        Mockito.when(userRepository.findById(3L)).thenReturn(java.util.Optional.of(new User()));
       // Assertions.assertEquals(userService.deleteUser(3L),"User deleted");
    }


}
