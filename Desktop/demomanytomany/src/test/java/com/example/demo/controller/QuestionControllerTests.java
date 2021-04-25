package com.example.demo.controller;

import com.example.demo.entity.Question;
import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@WithMockUser(username = "tarunya",authorities = {"ROLE_ADMIN"})
public class QuestionControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testQuestionsPage()throws Exception{
        this.mockMvc.perform(MockMvcRequestBuilders.get("/admin/questions"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.view().name("questions"))
                .andExpect(MockMvcResultMatchers.forwardedUrl("/WEB-INF/jsp/questions.jsp"));
    }
    @Test
    public void testAddQuestion()throws Exception{
        Question question1=new Question("qustn","op1","op2","op3","op4","ca");
        this.mockMvc.perform(MockMvcRequestBuilders.post("/admin/saveQuestion")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .with(SecurityMockMvcRequestPostProcessors.csrf())
                .sessionAttr("addquestion",question1))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.view().name("saveQuestion"))
                .andExpect(MockMvcResultMatchers.forwardedUrl("/WEB-INF/jsp/user-confirmed.jsp"))
                .andExpect(MockMvcResultMatchers.model().attributeHasFieldErrors("addquestion", "question"))
                .andExpect(MockMvcResultMatchers.model().attribute("addquestion", Matchers.hasProperty("question",Matchers.nullValue())));


    }
            /*
    when(accountServiceMock.createAccount(any(Account.class))).thenReturn(12345L);

  mockMvc.perform(post("/api/account")
           .contentType(MediaType.APPLICATION_JSON)
           .content("{ "accountType": "SAVINGS", "balance": 5000.0 }")
           .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isCreated())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
            .andExpect(header().string("Location", "/api/account/12345"))
            .andExpect(jsonPath("$.accountId").value("12345"))
            .andExpect(jsonPath("$.accountType").value("SAVINGS"))
            .andExpect(jsonPath("$.balance").value(5000));
}

             */
/*/*
    @Test
    public void testGetQuestion()throws Exception{
        this.mockMvc.perform(MockMvcRequestBuilders.get("/admin/getQuestion/1"))
                .andExpect(MockMvcResultMatchers.status().isOk());
             //   .andExpect(MockMvcResultMatchers.view().name("questions"))
             //   .andExpect(MockMvcResultMatchers.forwardedUrl("/WEB-INF/jsp/addQuestion.jsp"));
    }

 */

/*

    @Test
    public void testSaveQuestion()throws Exception{
        Question question=new Question("qustn","op1","op2","op3","op4","ca");

        this.mockMvc.perform(MockMvcRequestBuilders.post("/admin/saveQuestion")
                .param("question",String.valueOf(question)))
                .andExpect(MockMvcResultMatchers.status().isOk())
               .andExpect(MockMvcResultMatchers.view().name("redirect:admin/questions"))
               .andExpect(MockMvcResultMatchers.forwardedUrl("/WEB-INF/jsp/questions.jsp"));
    }



    @Test
    public void testDeleteQuestion()throws Exception{
        this.mockMvc.perform(MockMvcRequestBuilders.post("/admin/deleteQuestion/{id}",1L))
                .andExpect(MockMvcResultMatchers.status().isOk());
        //   .andExpect(MockMvcResultMatchers.view().name("questions"))
        //   .andExpect(MockMvcResultMatchers.forwardedUrl("/WEB-INF/jsp/addQuestion.jsp"));
    }


 */


}
