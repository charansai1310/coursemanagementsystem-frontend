import "./managecourses.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function ManageCoursesInstructor() {
  const [newCourseId, setNewCourseId] = useState("");
  const course = [
    {
      coursecode: "MB-CSE-0001",
      coursename: "Introduction to Programming",
      professor: "Prof. Elanor Bennett",
    },
    {
      coursecode: "MB-CSE-0002",
      coursename: "Data Structures And Algorithms",
      professor: "Prof. Oliver Anderson",
    },
    {
      coursecode: "MB-CSE-0003",
      coursename: "Database Management",
      professor: "Prof. Isabella Ramirez",
    },
  ];
  const findCourseById = (courseId) => {
    return course.find((course) => course.coursecode === courseId);
  };

  const handleAddCourse = () => {
    const newCourseData = findCourseById(newCourseId);

    if (newCourseData) {
      setInstructor((prevInstructor) => {
        const newCourse = {
          coursename: newCourseData.coursename,
          courseid: newCourseData.coursecode,
        };

        const updatedCourses = [...prevInstructor.courses, newCourse];
        return { ...prevInstructor, courses: updatedCourses };
      });

      // Clear the input field after adding the course
      setNewCourseId("");
    } else {
      console.error(`Course with ID ${newCourseId} not found.`);
    }
  };

  const [instructor, setInstructor] = useState({
    instructorname: "Prof. Elanor Bennet",
    instructorid: 5248,
    courses: [
      {
        coursename: "Introduction To Programming",
        courseid: "MB-CSE-0001",
      },
      {
        coursename: "Data Structures And Algorithms",
        courseid: "MB-CSE-0002",
      },
      {
        coursename: "Database Management",
        courseid: "MB-CSE-0003",
      },
    ],
  });
  const handleRemoveCourse = (indexToRemove) => {
    setInstructor((prevInstructor) => {
      const updatedCourses = prevInstructor.courses.filter(
        (course, index) => index !== indexToRemove
      );
      return { ...prevInstructor, courses: updatedCourses };
    });
  };

  return (
    <div className="page-container">
      <header className="header" id="headerid">
        <Link to="#headerid" className="logo">
          Maverick Brilliance
        </Link>
        <nav className="nav-items">
          <Link to="/Profile">Profile</Link>
          <Link to="/Instructor">Dashboard</Link>
          <Link to="/">Sign Out</Link>
        </nav>
      </header>
      <h2>Course Management - Enroll or Drop from a Course at One Place</h2>
      <div className="class-search">
        <p>Enter Course Code to check course availability.</p>
        <input
          id="coursecode"
          style={{ width: "25%" }}
          className="coursecode"
          type="text"
          placeholder="Enter Course Code"
          name="coursecode"
          onChange={(e) => setNewCourseId(e.target.value)}
          required
        />
        <br />
        <button
          className="btn-edit"
          onClick={() => handleAddCourse()}
          type="submit"
        >
          Get Assigned
        </button>
      </div>
      <br />
      <hr />
      <div className="grid-container-managecourses">
        <div>
          <div className="p1">
            <h2> All Courses</h2>
          </div>
          <table className="tablecss">
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Professor</th>
              <th>Availability</th>
            </tr>
            {course.map((course, index) => (
              <tr key={index}>
                <td>{course.coursecode}</td>
                <td>{course.coursename}</td>
                <td>{course.professor}</td>
                <td>
                  <Link to="/Availability">Check Availability</Link>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div>
          <div className="p1">
            <h2>Assigned Courses</h2>
          </div>
          <br />
          <br />
          <br />
          <br />
          <table>
            <thead>
              <tr>
                {Object.keys(course[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {instructor.courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.coursename}</td>
                  <td>{course.courseid}</td>
                  <td>
                    <button onClick={() => handleRemoveCourse(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer className="footer" id="footer">
        <div className="copy">
          &copy; Copyright by Team 10, 2023. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
export default ManageCoursesInstructor;
