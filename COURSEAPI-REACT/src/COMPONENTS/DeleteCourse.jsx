import { useState } from "react";
import axios from "axios";
import "./style.css";

export default function DeleteCourse({ refreshCourses }) {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleDelete = async () => {
    if (!id.trim()) {
      setMessage("⚠️ Please enter a valid Course ID.");
      setIsError(true);
      return;
    }
    try {
      await axios.delete(`http://localhost:2050/courseapi/delete/${id}`);
      setMessage(`✅ Course with ID ${id} deleted successfully.`);
      setIsError(false);
      setId("");

      // 🔄 Trigger parent refresh (CourseList)
      if (refreshCourses) {
        refreshCourses();
      }
    } catch (err) {
      setMessage("❌ Failed to delete course. Please check ID.");
      setIsError(true);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Delete Course</h2>

      <input
        type="number"
        placeholder="Enter Course ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleDelete()} // 🔑 Press Enter
        className="form-input"
      />

      <button onClick={handleDelete} className="btn delete-btn">
        Delete
      </button>

      {message && (
        <p className={`message ${isError ? "error" : "success"}`}>{message}</p>
      )}
    </div>
  );
}
