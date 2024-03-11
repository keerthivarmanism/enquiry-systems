package com.enquiry.system.Mapper;


import com.enquiry.system.Dto.CourseDTO;
import com.enquiry.system.Model.Course;

public class CourseMapper {

    public static CourseDTO mapToCourseDTO(Course course) {
        return new CourseDTO(
                course.getCourseID(),
                course.getCourseName(),
                course.getCoursePrice(),
                course.getHours(),
                course.getMentorId());
    }

    public static Course mapToCourse(CourseDTO courseDTO) {
        return new Course(
                courseDTO.getCourseID(),
                courseDTO.getCourseName(),
                courseDTO.getCoursePrice(),
                courseDTO.getHours(),
                courseDTO.getMentorId());
    }
}