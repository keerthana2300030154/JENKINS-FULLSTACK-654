package com.klef.service;

import java.util.List;
import com.klef.entity.Course;

public interface CourseService {
    Course addCourse(Course course);
    List<Course> getAllCourses();
    Course getCourseById(int id);
    Course updateCourse(Course course);
    void deleteCourseById(int id);
}
