import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:2030/courseapi/all");
      setCourses(response.data);
    } catch (err) {
      console.error("❌ Failed to fetch courses", err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="form-container">
      <h2 className="form-title">📚 All Courses</h2>
      <button onClick={fetchCourses} className="btn refresh-btn">
        🔄 Refresh
      </button>

      {courses.length > 0 ? (
        <ul>
          {courses.map((c) => (
            <li key={c.id}>
              <strong>{c.id}</strong> - {c.name} ({c.faculty}) ₹{c.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No courses available</p>
      )}
    </div>
  );
}
