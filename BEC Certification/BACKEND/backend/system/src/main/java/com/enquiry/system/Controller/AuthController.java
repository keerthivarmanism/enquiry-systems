package com.enquiry.system.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enquiry.system.Dto.AuthRequest;
import com.enquiry.system.Model.UserInfo;
import com.enquiry.system.Model.admin;
import com.enquiry.system.Model.user;
import com.enquiry.system.Repository.AdminRepository;
import com.enquiry.system.Repository.UserInfoRepository;
import com.enquiry.system.Repository.UserRepository;
import com.enquiry.system.Service.JwtService;



@RestController
@CrossOrigin(origins = "*" , allowedHeaders = "*")
@RequestMapping("/auth")
public class AuthController {


    @Autowired
    private JwtService jwtService;
    
    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Autowired
    private UserInfoRepository repository;

    @Autowired
    private AdminRepository adminRepo;

    @Autowired
    private UserRepository userRepository;
    
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome this endpoint is not secure";
    }
    
    @PostMapping("/new")
    public String addNewUser(@RequestBody UserInfo userInfo) {
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        repository.save(userInfo);
        if(userInfo.getRoles().equals("ADMIN" ) ||userInfo.getRoles().equals("admin" )){
            admin admin=new admin();
            admin.setUserInfo(userInfo);
            admin.setFirstName(userInfo.getName());
            admin.setEmail(userInfo.getEmail());
            admin.setPassword(userInfo.getPassword());
            adminRepo.save(admin);
        }
        else{
            user app_User=new user();
            app_User.setUserInfo(userInfo);
            app_User.setFirstName(userInfo.getName());
            // app_User.setLastName(userInfo.getLastName());
            app_User.setEmail(userInfo.getEmail());
            app_User.setPassword(userInfo.getPassword());
            userRepository.save(app_User);
        }
        repository.save(userInfo);



        return "user added to system ";
    }
    




    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getUsername());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }

    }
}
