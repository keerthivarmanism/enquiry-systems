package com.enquiry.system.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CourseDTO {
    private int courseID;
    private String courseName;
    private double coursePrice;
    private int hours;
    private int mentorId;
}