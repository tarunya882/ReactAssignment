package com.example.demo.service;

import com.example.demo.entity.Question;
import com.example.demo.repository.QuestionRepository;
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
import org.springframework.security.test.context.support.WithMockUser;

import java.util.ArrayList;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
@SpringBootTest
@ExtendWith(MockitoExtension.class)
@WithMockUser(username = "tarunya", authorities = {"ROLE_ADMIN"})
public class QuestionTests {


    @Mock
    private QuestionRepository questionRepository;

    @InjectMocks
    private QuestionService questionService;

    @Test
    public void testGetAllQuestions(){
        List<Question> questionList=new ArrayList<>();
        Question question=new Question("qu","op1","op2","op3","op4","ca");
        questionList.add(question);
        Mockito.when(questionRepository.findAll()).thenReturn(questionList);
        List<Question>allQuestions=questionService.getAllQuestions();
        System.out.println(allQuestions);
        Assertions.assertNotEquals("",allQuestions.get(0).getQuestion());
        Mockito.verify(questionRepository, Mockito.times(1)).findAll();
    }


    @Test
    public void testFindById()throws Exception{
        Mockito.when(questionRepository.findById(1L)).thenReturn(java.util.Optional.of(new Question()));
        Assertions.assertNotNull(questionService.getQuestionById(1L));
    }

    @Test
    public void testCreateQuestion()throws Exception{
        Question question=new Question("qu","op1","op2","op3","op4","ca");
        questionService.createQuestion(question);
        Mockito.verify(questionRepository,Mockito.times(1)).save(Mockito.any(Question.class));
    }

    @Test
    public void testDeleteById()throws Exception{
        questionService.deleteQuestion(3L);
        Mockito.verify(questionRepository,Mockito.times(1)).deleteById(3L);
    }

}
