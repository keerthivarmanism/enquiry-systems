import React, { useState, useEffect } from 'react';
import '../assets/course.css';

const CoursePage = () => {
  // State to store the list of courses
  const [courses, setCourses] = useState([]);

  // Fetch courses from API when component mounts
  useEffect(() => {
    fetchCourses();
  }, []);

  // Function to fetch courses from an API
  const fetchCourses = async () => {
    try {
      // Simulated API call to fetch courses
      const response = await fetch('https://api.example.com/courses');
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  return (
    <div className="course-page">
      <header>
        <h1>Courses Offered</h1>
        <p>Explore our available courses and enroll today!</p>
      </header>
      <div className="course-list">
        {courses.map((course, index) => (
          <div className="course-item" key={index}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Duration: {course.duration} weeks</p>
            <button>Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CoursePage;