package com.enquiry.system.Mapper;



import com.enquiry.system.Dto.*;
import com.enquiry.system.Model.*;

public class UserMapper {

    public static UserDTO maptoUserDto(user Users) {
        return new UserDTO(
                Users.getId(),
                Users.getFirstName(),
                Users.getEmail(),
                Users.getPassword(),
                Users.getUserInfo()
                );
    }


    public static user maptoUser(UserDTO UserDTO) {
        return new user(
                UserDTO.getId(),
                UserDTO.getFirstName(),
                UserDTO.getEmail(),
                UserDTO.getPassword(),
                UserDTO.getUserinfo() );
    }

}