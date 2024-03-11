package com.enquiry.system.Service.imp;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

import com.enquiry.system.Dto.CourseDTO;
import com.enquiry.system.Model.Course;
import com.enquiry.system.Exception.UserException;
import com.enquiry.system.Mapper.CourseMapper;
import com.enquiry.system.Repository.CourseRepository;
import com.enquiry.system.Service.CourseService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CourseServiceImp implements CourseService {

    private CourseRepository courseRepository;

    @Override
    public CourseDTO createCourse(CourseDTO courseDTO) {
        Course course = CourseMapper.mapToCourse(courseDTO);
        courseRepository.save(course);
        return CourseMapper.mapToCourseDTO(course);
    }

    @Override
    public CourseDTO getCourseById(Integer courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new UserException("Course is not exist with given id : " + courseId));
        return CourseMapper.mapToCourseDTO(course);
    }

    @Override
    public List<CourseDTO> getAllCourses() {
        List<Course> courses = courseRepository.findAll();
        List<CourseDTO> courseDTOs = new ArrayList<>();
        for (Course course : courses) {
            courseDTOs.add(CourseMapper.mapToCourseDTO(course));
        }
        return courseDTOs;
    }
    @Override
public CourseDTO updateCourse(Integer courseId, CourseDTO courseDTO) {
    Course course = courseRepository.findById(courseId)
            .orElseThrow(() -> new UserException("Course not found with id: " + courseId));

    course.setCourseName(courseDTO.getCourseName());
    course.setCoursePrice(courseDTO.getCoursePrice());
    course.setHours(courseDTO.getHours());
    course.setMentorId(courseDTO.getMentorId());

    Course updatedCourse = courseRepository.save(course);
    return CourseMapper.mapToCourseDTO(updatedCourse);
}

@Override
public void deleteCourse(Integer courseId) {
    courseRepository.deleteById(courseId);
}
}