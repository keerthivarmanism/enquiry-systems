package com.enquiry.system.Dto;

import com.enquiry.system.Model.UserInfo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdminDTO {
    private Long id;
    private String firstName;
    private String email;
    private UserInfo userinfo;
}