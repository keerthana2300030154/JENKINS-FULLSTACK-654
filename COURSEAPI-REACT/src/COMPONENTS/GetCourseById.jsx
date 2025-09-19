import { useState } from "react";
import axios from "axios";
import config from "../config";
import "./style.css";

export default function GetCourseById() {
  const [id, setId] = useState("");
  const [course, setCourse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!id.trim() || isNaN(id)) {
      setError("⚠️ Please enter a valid numeric Course ID!");
      setCourse(null);
      return;
    }
    try {
      setLoading(true);
      const response = await axios.get(`${config.API_BASE_URL}/get/${id}`);
      setCourse(response.data);
      setError("");
    } catch {
      setError(`❌ Course with ID ${id} not found.`);
      setCourse(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">🔎 Get Course By ID</h2>
      <div className="search-container">
        <input
          type="number"
          placeholder="Enter Course ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="form-input"
        />
        <button onClick={handleSearch} className="btn search-btn" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      {error && <p className="message error">{error}</p>}
      {course && (
        <div className="course-details">
          <h3>📘 Course Details</h3>
          <p><strong>ID:</strong> {course.id}</p>
          <p><strong>Name:</strong> {course.name}</p>
          <p><strong>Faculty:</strong> {course.faculty}</p>
          <p><strong>Price:</strong> ₹{course.price}</p>
        </div>
      )}
    </div>
  );
}
