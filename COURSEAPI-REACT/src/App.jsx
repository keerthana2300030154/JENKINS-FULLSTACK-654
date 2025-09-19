import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./COMPONENTS/Navbar";
import CourseList from "./COMPONENTS/CourseList";
import AddCourse from "./COMPONENTS/AddCourse";
import UpdateCourse from "./COMPONENTS/UpdateCourse";
import DeleteCourse from "./COMPONENTS/DeleteCourse";
import GetCourseById from "./COMPONENTS/GetCourseById";
import "./COMPONENTS/style.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/courses" element={<CourseList />} />
        <Route path="/add" element={<AddCourse />} />
        <Route path="/update" element={<UpdateCourse />} />
        <Route path="/delete" element={<DeleteCourse />} />
        <Route path="/getbyid" element={<GetCourseById />} />
      </Routes>
    </Router>
  );
}

export default App;
