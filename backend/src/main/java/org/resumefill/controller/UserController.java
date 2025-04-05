package org.resumefill.controller;

import org.resumefill.model.dto.UserDTO;
import org.resumefill.model.vo.UserVO;
import org.resumefill.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {
    
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    
    private final UserService userService;
    
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    
    @GetMapping
    public ResponseEntity<List<UserVO>> getAllUsers() {
        logger.info("接收到获取所有用户的请求");
        List<UserVO> users = userService.findAllUsers();
        return ResponseEntity.ok(users);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<UserVO> getUserById(@PathVariable Long id) {
        logger.info("接收到获取用户ID={}的请求", id);
        UserVO user = userService.findUserById(id);
        return ResponseEntity.ok(user);
    }
    
    @PostMapping
    public ResponseEntity<UserVO> createUser(@RequestBody UserDTO userDTO) {
        logger.info("接收到创建用户的请求: {}", userDTO);
        UserVO createdUser = userService.createUser(userDTO);
        return ResponseEntity.ok(createdUser);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<UserVO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        logger.info("接收到更新用户ID={}的请求: {}", id, userDTO);
        UserVO updatedUser = userService.updateUser(id, userDTO);
        return ResponseEntity.ok(updatedUser);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        logger.info("接收到删除用户ID={}的请求", id);
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
} 