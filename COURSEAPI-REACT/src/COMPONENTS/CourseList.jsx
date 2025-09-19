import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:2050/courseapi/all"); // ✅ fixed URL
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
      <ul>
        {courses.length > 0 ? (
          courses.map((c) => (
            <li key={c.id}>
              {c.id} - {c.name} ({c.faculty}) ₹{c.price}
            </li>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </ul>
    </div>
  );
}
