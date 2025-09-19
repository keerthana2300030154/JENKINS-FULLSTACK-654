package com.klef.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.klef.entity.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {
    // Spring Data JPA already provides all CRUD methods
}
