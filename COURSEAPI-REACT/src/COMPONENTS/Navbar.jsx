import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>Course Management</h2>
      <div>
        <Link to="/courses">Course List</Link>
        <Link to="/add">Add Course</Link>
        <Link to="/getbyid">Get Course By ID</Link>
        <Link to="/update">Update Course</Link>
        <Link to="/delete">Delete Course</Link>
      </div>
    </div>
  );
}
