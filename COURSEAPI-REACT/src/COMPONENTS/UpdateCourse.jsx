import { useState } from "react";
import axios from "axios";
import "./style.css";

export default function UpdateCourse() {
  const [id, setId] = useState("");
  const [course, setCourse] = useState({
    name: "",
    faculty: "",
    price: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!id || isNaN(id)) {
      setMessage("⚠️ Please enter a valid numeric Course ID!");
      setCourse({ name: "", faculty: "", price: "" });
      return;
    }
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:2030/courseapi/get/${id}`);
      setCourse({
        name: response.data.name,
        faculty: response.data.faculty,
        price: response.data.price,
      });
      setMessage("");
    } catch (err) {
      setMessage(`❌ Course with ID ${id} not found!`);
      setCourse({ name: "", faculty: "", price: "" });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:2030/courseapi/update", {
        id: Number(id), 
        ...course,
      });
      setMessage(`✅ Course with ID ${id} updated successfully!`);
    } catch (err) {
      setMessage("❌ Failed to update course. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">✏️ Update Course</h2>

      {/* Search by ID */}
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

      {/* Update Form */}
      {course.name && (
        <form onSubmit={handleUpdate}>
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
          <button type="submit" className="btn update-btn">
            Update Course
          </button>
        </form>
      )}

      {message && (
        <p className={`message ${message.startsWith("✅") ? "success" : "error"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
