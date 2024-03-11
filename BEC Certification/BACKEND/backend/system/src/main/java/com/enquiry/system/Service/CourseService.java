package com.enquiry.system.Service;



import com.enquiry.system.Dto.CourseDTO;
import java.util.List;

public interface CourseService {
    CourseDTO createCourse(CourseDTO courseDTO);
    CourseDTO getCourseById(Integer courseId);
    List<CourseDTO> getAllCourses();
    CourseDTO updateCourse(Integer courseId, CourseDTO courseDTO);
    void deleteCourse(Integer courseId);
}