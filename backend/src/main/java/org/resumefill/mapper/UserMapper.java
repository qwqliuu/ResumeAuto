package org.resumefill.mapper;

import org.resumefill.model.dto.UserDTO;
import org.resumefill.model.entity.User;
import org.resumefill.model.vo.UserVO;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    
    public User toUser(UserDTO userDTO) {
        if (userDTO == null) {
            return null;
        }
        
        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setFullName(userDTO.getFullName());
        return user;
    }
    
    public UserVO toUserVO(User user) {
        if (user == null) {
            return null;
        }
        
        UserVO userVO = new UserVO();
        userVO.setId(user.getId());
        userVO.setUsername(user.getUsername());
        userVO.setEmail(user.getEmail());
        userVO.setFullName(user.getFullName());
        userVO.setCreatedAt(user.getCreatedAt());
        return userVO;
    }
    
    public void updateUserFromDTO(UserDTO userDTO, User user) {
        if (userDTO == null) {
            return;
        }
        
        if (userDTO.getUsername() != null) {
            user.setUsername(userDTO.getUsername());
        }
        if (userDTO.getEmail() != null) {
            user.setEmail(userDTO.getEmail());
        }
        if (userDTO.getFullName() != null) {
            user.setFullName(userDTO.getFullName());
        }
    }
} 