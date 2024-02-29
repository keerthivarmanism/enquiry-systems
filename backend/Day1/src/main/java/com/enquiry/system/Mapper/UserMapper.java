package com.enquiry.system.Mapper;



import com.enquiry.system.Dto.*;
import com.enquiry.system.Model.*;

public class UserMapper {

    public static UserDTO maptoUserDto(user Users) {
        return new UserDTO(
                Users.getId(),
                Users.getFirstName(),
                Users.getLastName(),
                Users.getEmail(),
                Users.getQualification(),
                Users.getIntrest(),
                Users.getPassword()
                );
    }


    public static user maptoUser(UserDTO UserDTO) {
        return new user(
                UserDTO.getId(),
                UserDTO.getFirstName(),
                UserDTO.getLastName(),
                UserDTO.getEmail(),
                UserDTO.getQualification(),
                UserDTO.getIntrest(),
                UserDTO.getPassword()
                );
    }

}