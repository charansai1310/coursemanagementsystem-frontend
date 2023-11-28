import { useContext, useEffect, useState } from "react";
import "./managecourses.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { APIHOST } from "../env";
import { AuthContext } from "../contexts/AuthContext";
function ManageCourses() {
  const [newCourseId, setNewCourseId] = useState("");
  const [authState, setAuthState] = useContext(AuthContext);

  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const fetchAllCourses = async () => {
    const res = await axios.get(APIHOST + "/api/courses/", {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    });
    console.log(res.data);
    setCourses(res.data)
  }

  const fetchAllEnrolledCourses = async () => {
    const res = await axios.get(
      APIHOST + "/api/users/" + authState.userData.id + "/courses",
      {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      }
    );
    console.log(res.data);
    setEnrolledCourses(res.data)
  }

  useEffect(() => {
    fetchAllCourses()
    fetchAllEnrolledCourses()
  }, [])


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
  const [student, setStudent] = useState({
    studentname: "Charan, Kondapaneni",
    studentid: 5248,
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
  const findCourseById = (courseId) => {
    return course.find((course) => course.coursecode === courseId);
  };

  const handleAddCourse = () => {
    const newCourseData = findCourseById(newCourseId);

    if (newCourseData) {
      setStudent((prevStudent) => {
        const newCourse = {
          coursename: newCourseData.coursename,
          courseid: newCourseData.coursecode,
        };

        const updatedCourses = [...prevStudent.courses, newCourse];
        return { ...prevStudent, courses: updatedCourses };
      });

      // Clear the input field after adding the course
      setNewCourseId("");
    } else {
      console.error(`Course with ID ${newCourseId} not found.`);
    }
  };
  const handleDropCourse = (indexToRemove) => {
    setStudent((prevStudent) => {
      const updatedCourses = prevStudent.courses.filter(
        (course, index) => index !== indexToRemove
      );
      return { ...prevStudent, courses: updatedCourses };
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
          <Link to="/StudentPage">Dashboard</Link>
          <Link to="/">Sign Out</Link>
        </nav>
      </header>
      <h2>Course Management - Enroll or Drop from a Course at One Place</h2>
      <div className="class-search">
        <p>Enter Course Code to check course availability.</p>
        <input
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
          Enroll
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
              <th>Enrollment</th>
            </tr>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course['course_id']}</td>
                <td>{course['course_name']}</td>
                <td>{course['instructor_firstname'] + ' ' + course['instructor_lastname']}</td>
                <td>
                  {/* <Link to="/Availability">Enroll</Link> */}
                  Enroll
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div>
          <div className="p1">
            <h2>Enrolled Courses</h2>
          </div>
          <br />
          <br />
          <br />
          <br />
          <table>
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {enrolledCourses.map((course, index) => (
                <tr key={index}>
                  <td>{course.id}</td>
                  <td>{course.name}</td>
                  <td>
                    <button onClick={() => handleDropCourse(index)}>
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
export default ManageCourses;
