import { useState } from "react";
import axios from "axios";
import config from "./config.js";
import "./style.css";

export default function AddCourse({ refreshCourses }) {
  const [course, setCourse] = useState({ name: "", faculty: "", price: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const baseUrl = `${config.url}/courseapi`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/add`, {
        name: course.name,
        faculty: course.faculty,
        price: Number(course.price),
      });

      setMessage("✅ Course added successfully!");
      setCourse({ name: "", faculty: "", price: "" });

      if (refreshCourses) refreshCourses();
    } catch (err) {
      console.error("❌ Failed to add course:", err);
      setMessage("❌ Failed to add course.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Course Name"
          value={course.name}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="text"
          name="faculty"
          placeholder="Enter Faculty Name"
          value={course.faculty}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Enter Course Price"
          value={course.price}
          onChange={handleChange}
          className="form-input"
          required
        />
        <button type="submit" className="btn add-btn">Add Course</button>
      </form>
      {message && (
        <p className={`${message.startsWith("✅") ? "success" : "error"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
