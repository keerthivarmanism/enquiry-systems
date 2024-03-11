package com.enquiry.system.Service.imp;


import java.util.ArrayList;
import java.util.List;
// import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.enquiry.system.Dto.UserDTO;
import com.enquiry.system.Model.user;
import com.enquiry.system.Exception.UserException;
import com.enquiry.system.Mapper.UserMapper;
import com.enquiry.system.Repository.UserRepository;
import com.enquiry.system.Service.UserServices;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserimpService implements UserServices {

    private UserRepository userRepository;

    @Override
    public UserDTO createuser(UserDTO UserDTO) {

        user user = UserMapper.maptoUser(UserDTO);
        userRepository.save(user);
        return UserMapper.maptoUserDto(user);
    }

    @Override
    public UserDTO getuserById(Long userId) {
        user user = userRepository.findById(userId)
                .orElseThrow(
                        () -> new UserException("user is not exist with given id : " + userId));

        return UserMapper.maptoUserDto(user);
    }


    @Override
    public UserDTO UpdateById(Long userId) {
        user user = userRepository.findById(userId)
                .orElseThrow(
                        () -> new UserException("user is updated with given id : " + userId));

        return UserMapper.maptoUserDto(user);
    }

    @Override
    public UserDTO DeleteById(Long userId) {
        user user = userRepository.findById(userId)
                .orElseThrow(
                        () -> new UserException("user is deleted with given id : " + userId));

        return UserMapper.maptoUserDto(user);
    }

    @Override
    public List<UserDTO> getAlluser() {
        List<user> users = userRepository.findAll();

        List<UserDTO> userdtos = new ArrayList<>();
        for (user user : users) {
            userdtos.add(UserMapper.maptoUserDto(user));
        }

        return userdtos;
    }

    @Override
    public UserDTO createUserDTO(UserDTO UserDTO) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'createUserDTO'");
    }

    // @Override
    // public UserDTO createuser(UserDTO userDTO) {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'createuser'");
    // }

}