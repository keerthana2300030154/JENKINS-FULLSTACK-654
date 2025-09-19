package com.klef.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.klef.entity.Course;
import com.klef.repo.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public Course addCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public Course getCourseById(int id) {
        return courseRepository.findById(id).orElse(null);
    }

    @Override
    public Course updateCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public void deleteCourseById(int id) {
        courseRepository.deleteById(id);
    }
}
