package com.enquiry.system.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enquiry.system.Dto.*;
import com.enquiry.system.Service.*;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserServices UserServices;

    // Build Add Employee REST API
    @PostMapping
    public ResponseEntity<UserDTO> createuser(@RequestBody UserDTO UserDTO) {
       UserDTO saveduser = UserServices.createuser(UserDTO);
        return new ResponseEntity<>(saveduser, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable("id") Long userId) {
        UserDTO UserDTO = UserServices.getuserById(userId);
        return ResponseEntity.ok(UserDTO);
    }

    // Build Get All Employee REST API
    @GetMapping
    public ResponseEntity<List<UserDTO>> getAlluser() {
        List<UserDTO> user = UserServices.getAlluser();
        return ResponseEntity.ok(user);
    }

}