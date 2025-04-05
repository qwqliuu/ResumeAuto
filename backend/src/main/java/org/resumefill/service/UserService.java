package org.resumefill.service;

import org.resumefill.model.dto.UserDTO;
import org.resumefill.model.vo.UserVO;

import java.util.List;

public interface UserService {
    List<UserVO> findAllUsers();
    UserVO findUserById(Long id);
    UserVO createUser(UserDTO userDTO);
    UserVO updateUser(Long id, UserDTO userDTO);
    void deleteUser(Long id);
} 