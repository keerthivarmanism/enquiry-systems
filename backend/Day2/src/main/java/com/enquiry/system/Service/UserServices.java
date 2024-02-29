package com.enquiry.system.Service;


import java.util.List;

import com.enquiry.system.Dto.*;

public interface UserServices {
    UserDTO createUserDTO(UserDTO UserDTO);

    UserDTO getuserById(Long userId);

    List<UserDTO> getAlluser();

    UserDTO createuser(UserDTO userDTO);
}
