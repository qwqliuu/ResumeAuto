package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@CrossOrigin(origins = "*")
public class HelloController {
    
    private static final Logger logger = LoggerFactory.getLogger(HelloController.class);
    
    @GetMapping("/")
    public String root() {
        logger.info("收到根路径请求");
        return "Spring Boot is running!";
    }
    
    @GetMapping("/api/hello")
    public String hello() {
        logger.info("收到请求: /api/hello");
        String response = "Hello from Spring Boot!";
        logger.info("返回响应: {}", response);
        return response;
    }
    
    // 添加一个匹配 /page/api/hello 的端点
    @GetMapping("/page/api/hello")
    public String helloWithContextPath() {
        logger.info("收到带context-path的请求: /page/api/hello");
        String response = "Hello from Spring Boot with context path!";
        logger.info("返回响应: {}", response);
        return response;
    }
} 