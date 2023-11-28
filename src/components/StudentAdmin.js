import "./Header.css";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { useEffect, useRef } from "react";
import "./gridcontainer.css";
import { HashLink } from "react-router-hash-link";
import Chart from "chart.js/auto";
import axios from "axios";
import { APIHOST } from "../env";
import { AuthContext } from "../contexts/AuthContext";
const StudentAdmin = () => {
  const [courseId, setCourseId] = useState("");
  const [mavId, setMavId] = useState("");
  const [student, setStudent] = useState(null);
  const [courses, setCourses] = useState([]);
  const studentinfo = {
    Mavid: "5248",
    details: {
      Firstname: "Charan",
      Lastname: "Kondapaneni",
      Email: "csk5248@mavs.uta.edu",
      Phone: "1234567890",
    },
    courses: [
      {
        coursecode: "MB-CSE-0001",
        coursename: "Introduction to Programming",
        professor: "Prof. Elanor Bennett",
        assignments: [
          {
            assignmentname: "Assignment 1",
            assignmentgrade: 10,
          },
          {
            assignmentname: "Assignment 2",
            assignmentgrade: 85,
          },
          {
            assignmentname: "Assignment 3",
            assignmentgrade: 65,
          },
          {
            assignmentname: "Assignment 4",
            assignmentgrade: 40,
          },
        ],
        quizzes: [
          {
            quizname: "Quiz 1",
            quizgrade: 90,
          },
          {
            quizname: "Quiz 2",
            quizgrade: 85,
          },
          {
            quizname: "Quiz 3",
            quizgrade: 65,
          },
        ],
      },
      {
        coursecode: "MB-CSE-0002",
        coursename: "Data Structures And Algorithms",
        professor: "Prof. Oliver Anderson",
        assignments: [
          {
            assignmentname: "Assignment 1",
            assignmentgrade: 10,
          },
          {
            assignmentname: "Assignment 2",
            assignmentgrade: 85,
          },
          {
            assignmentname: "Assignment 3",
            assignmentgrade: 65,
          },
          {
            assignmentname: "Assignment 4",
            assignmentgrade: 40,
          },
        ],
        quizzes: [
          {
            quizname: "Quiz 1",
            quizgrade: 90,
          },
          {
            quizname: "Quiz 2",
            quizgrade: 85,
          },
          {
            quizname: "Quiz 3",
            quizgrade: 65,
          },
        ],
      },
      {
        coursecode: "MB-CSE-0003",
        coursename: "Database Management",
        professor: "Prof. Isabella Ramirez",
        assignments: [
          {
            assignmentname: "Assignment 1",
            assignmentgrade: 90,
          },
          {
            assignmentname: "Assignment 2",
            assignmentgrade: 85,
          },
          {
            assignmentname: "Assignment 3",
            assignmentgrade: 65,
          },
          {
            assignmentname: "Assignment 4",
            assignmentgrade: 40,
          },
        ],
        quizzes: [
          {
            quizname: "Quiz 1",
            quizgrade: 90,
          },
          {
            quizname: "Quiz 2",
            quizgrade: 85,
          },
          {
            quizname: "Quiz 3",
            quizgrade: 65,
          },
        ],
      },
    ],
  };
  const [authState, setAuthState] = useContext(AuthContext);

  const fetchStudent = async () => {
    const res = await axios.get(
      APIHOST + "/api/users/" + mavId,
      {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      }
    );
    console.log(res.data);
    setStudent(res.data)
  }

  const fetchCourses = async () => {
    const res = await axios.get(
      APIHOST + "/api/users/" + mavId + "/courses",
      {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      }
    );
    console.log(res.data);
    setCourses(res.data);
  };

  const handleCourseIdChange = (e) => {
    setCourseId(e.target.value);
  };
  const handleMavIdChange = (e) => {
    setMavId(e.target.value);
  };

  const handleSearch = async () => {
    await fetchStudent()
    await fetchCourses()
    toggleComponent("studentinfo")
  }

  const [componentVisibility, setComponentVisibility] = useState({
    studentinfo: false, // Set the initial state to hide all components
    courseinfo: false,
    reportsinfo: false,
    analyticsinfo: false,
  });


  const toggleComponent = (componentName) => {
    setComponentVisibility((prevVisibility) => ({
      ...prevVisibility,
      [componentName]: !prevVisibility[componentName],
    }));
  };
  
  
  return (
    <div className="page-container">
      <header class="header" id="headerid">
        <Link to="#headerid" class="logo">
          Maverick Brilliance
        </Link>
        <nav class="nav-items">
          <Link to="javascript:history.back()">Back</Link>
        </nav>
      </header>
      <p style={{ fontSize: "x-large", fontWeight: "bold" }}>
        STUDENT MANAGEMENT
      </p>
      <hr width="100%" />
      <div class="grid-container-student-admin">
        <div>
          <div class="index-items">
            <ul>
              <li>
                <HashLink to="#managestudent">Manage Student</HashLink>
              </li>
              <li>
                <HashLink to="#managereports">Reports And Analytics</HashLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div id="managestudent" style={{ textAlign: "left" }}>
            <p style={{ fontSize: "larger" }}>
              <b>Student Management</b>
              <br />
              Enter Id and click on search button
            </p>
            <label for="idno"></label>
            <br />
            <input
              style={{ width: "50%" }}
              type="text"
              value={mavId}
              onChange={handleMavIdChange}
              placeholder="Enter Id Number"
              name="idno"
              required
            />
            {"\t"}
            <button
              type="submit"
              className="btn-edit"
              onClick={handleSearch}
            >
              Search
            </button>
            {componentVisibility.studentinfo ? (
              <Results data={student} mavId={student.mavid} />
            ) : null}
          </div>
          <div id="managecourse" style={{ textAlign: "left" }}>
            <label for="idno"></label>
            <br />
            {componentVisibility.studentinfo ? (
              <ResultsCourse data={courses} />
            ) : null}
            <br />
            <br />
            <hr style={{ width: "100%" }} />
            <br />
          </div>
          <div id="managereports" style={{ textAlign: "left" }}>
            <p style={{ fontSize: "larger" }}>
              <b>Report And Analytics</b>
              <br />
              Enter Course Id and click on search button
            </p>
            <label for="idno"></label>
            <br />
            <input
              style={{ width: "50%" }}
              type="text"
              value={courseId}
              onChange={handleCourseIdChange}
              placeholder="Enter Course Id"
              name="idno"
              required
            />
            {"\t"}
            <button
              type="submit"
              className="btn-edit"
              onClick={() => toggleComponent("reportsinfo")}
            >
              Search
            </button>
            <br />
            {componentVisibility.reportsinfo ? (
              <Report grades={studentinfo.courses} courseId={courseId} />
            ) : null}
            <br />
            <br />
            <hr style={{ width: "100%" }} />
            <br />
          </div>
        </div>
        <div></div>
      </div>
      <footer className="footer" id="footer">
        <div className="copy">
          &copy; Copyright by Team 10, 2023. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

const Results = ({ data, mavId }) => {
  const [studentData, setStudentData] = useState(data);
  const [isEditing, setIsEditing] = useState(false);
  const handleDropCourse = (indexToRemove) => {
    setStudentData((prevStudentData) => {
      const updatedCourses = prevStudentData.courses.filter(
        (course, index) => index !== indexToRemove
      );
      return { ...prevStudentData, courses: updatedCourses };
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setStudentData({ ...studentData, [field]: value });
  };

  return (
    <div>
      <h2>MAV ID : {mavId}</h2>
      <table>
        <tbody>
          {Object.entries(studentData).map(([field, value]) => (
            <tr key={field}>
              <td>{field}</td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                  />
                ) : (
                  value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      {isEditing ? (
        <button className="btn-edit" onClick={handleSave}>
          Save
        </button>
      ) : (
        <button className="btn-edit" onClick={handleEdit}>
          Edit
        </button>
      )}
    </div>
  );
};

const ResultsCourse = ({ data }) => {
  const [studentData, setStudentData] = useState(
    Array.isArray(data) ? data : []
  );

  const [newCourseId, setNewCourseId] = useState("");
  const course = data.some((course) => [course.coursename, course.coursecode]);
  console.log(studentData);
  const handleDropCourse = (courseCodeToRemove) => {
    setStudentData((prevStudentData) =>
      prevStudentData.filter(
        (course) => course.coursecode !== courseCodeToRemove
      )
    );
  };
  const findCourseById = (courseId) => {
    return data.find((course) => course.coursecode === courseId);
  };
  const handleAddCourse = () => {
    const newCourseData = findCourseById(newCourseId);
    if (newCourseData) {
      const newCourse = {
        coursename: newCourseData.coursename,
        coursecode: newCourseData.coursecode,
      };

      const updatedCourses = [...studentData, newCourse];
      setStudentData(updatedCourses);

      // Clear the input field after adding the course
      setNewCourseId("");
    } else {
      console.error(`Course with ID ${newCourseId} not found.`);
    }
  };
  return (
    <div>
      <table>
        <tbody>
          {studentData.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.id}</td>
              <td>
                <button onClick={() => handleDropCourse(course.coursecode)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <input
        style={{ width: "35%", height: "25%" }}
        className="coursecode"
        type="text"
        placeholder="Enter Course Code"
        name="coursecode"
        onChange={(e) => setNewCourseId(e.target.value)}
        required
      />
      {"\t"}
      {"\t"}
      {"\t"}
      {"\t"}
      {"\t"}
      <button className="btn-edit" onClick={handleAddCourse}>
        Add Courses
      </button>
    </div>
  );
};

const Report = ({ grades, courseId }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const currentCourse = grades.find(
        (course) => course.coursecode === courseId
      );

      if (!currentCourse) {
        console.error(`Course data not found for ${courseId}.`);
        return;
      }

      const assignmentsData = currentCourse.assignments.map((assignment) => ({
        x: assignment.assignmentname,
        y: assignment.assignmentgrade,
      }));

      const quizzesData = currentCourse.quizzes.map((quiz) => ({
        x: quiz.quizname,
        y: quiz.quizgrade,
      }));

      const chart = new Chart(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: "Assignments",
              data: assignmentsData,
              borderColor: "rgb(255, 99, 132)",
              tension: 0.1,
            },
            {
              label: "Quizzes",
              data: quizzesData,
              borderColor: "rgb(54, 162, 235)",
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: "Assessment Name",
              },
            },
            y: {
              title: {
                display: true,
                text: "Score",
              },
              suggestedMin: 0,
              suggestedMax: 100,
            },
          },
        },
      });

      return () => {
        chart.destroy(); // Cleanup when component unmounts
      };
    }
  }, [grades, courseId]);

  if (!grades.find((course) => course.coursecode === courseId)) {
    return <div>Course data not found for this courseId.</div>;
  }

  const currentCourse = grades.find((course) => course.coursecode === courseId);
  const assignments = currentCourse.assignments;
  const quizzes = currentCourse.quizzes;

  return (
    <div>
      <div className="grades">
        <br />
        <div>
          <div>{courseId}</div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment, index) => (
                <tr key={`assignment-${index}`}>
                  <td>{assignment.assignmentname}</td>
                  <td>{assignment.assignmentgrade}</td>
                </tr>
              ))}
              {quizzes.map((quiz, index) => (
                <tr key={`quiz-${index}`}>
                  <td>{quiz.quizname}</td>
                  <td>{quiz.quizgrade}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <br />
          <canvas ref={chartRef} />
        </div>
      </div>
    </div>
  );
};

export default StudentAdmin;
