import "./Header.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import "./gridcontainer.css";
import { HashLink } from "react-router-hash-link";
import Chart from "chart.js/auto";
const InstructorAdmin = () => {
  const [courseIdReviews, setCourseIdReviews] = useState("");
  const [courseIdReports, setCourseIdReports] = useState("");
  const [mavId, setMavId] = useState("");
  const instructorinfo = {
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
        assignments: [
          {
            assignmentname: "Assignment 1",
            avgassignmentgrade: 90,
          },
          {
            assignmentname: "Assignment 2",
            avgassignmentgrade: 85,
          },
          {
            assignmentname: "Assignment 3",
            avgassignmentgrade: 65,
          },
          {
            assignmentname: "Assignment 4",
            avgassignmentgrade: 40,
          },
        ],
        quizzes: [
          {
            quizname: "Quiz 1",
            avgquizgrade: 90,
          },
          {
            quizname: "Quiz 2",
            avgquizgrade: 85,
          },
          {
            quizname: "Quiz 3",
            avgquizgrade: 65,
          },
        ],
        reviews: [
          "review 1",
          "review 2",
          "review 3",
          "review 4",
          "review 5",
          "review 6",
          "review 7",
        ],
      },
      {
        coursecode: "MB-CSE-0002",
        coursename: "Data Structures And Algorithms",
        assignments: [
          {
            assignmentname: "Assignment 1",
            avgassignmentgrade: 90,
          },
          {
            assignmentname: "Assignment 2",
            avgassignmentgrade: 85,
          },
          {
            assignmentname: "Assignment 3",
            avgassignmentgrade: 65,
          },
          {
            assignmentname: "Assignment 4",
            avgassignmentgrade: 40,
          },
        ],
        quizzes: [
          {
            quizname: "Quiz 1",
            avgquizgrade: 90,
          },
          {
            quizname: "Quiz 2",
            avgquizgrade: 85,
          },
          {
            quizname: "Quiz 3",
            avgquizgrade: 65,
          },
        ],
        reviews: [
          "review 1",
          "review 2",
          "review 3",
          "review 4",
          "review 5",
          "review 6",
          "review 7",
        ],
      },
      {
        coursecode: "MB-CSE-0003",
        coursename: "Database Management",
        assignments: [
          {
            assignmentname: "Assignment 1",
            avgassignmentgrade: 90,
          },
          {
            assignmentname: "Assignment 2",
            avgassignmentgrade: 85,
          },
          {
            assignmentname: "Assignment 3",
            avgassignmentgrade: 65,
          },
          {
            assignmentname: "Assignment 4",
            avgassignmentgrade: 40,
          },
        ],
        quizzes: [
          {
            quizname: "Quiz 1",
            avgquizgrade: 90,
          },
          {
            quizname: "Quiz 2",
            avgquizgrade: 85,
          },
          {
            quizname: "Quiz 3",
            avgquizgrade: 65,
          },
        ],
        reviews: [
          "review 1",
          "review 2",
          "review 3",
          "review 4",
          "review 5",
          "review 6",
          "review 7",
        ],
      },
    ],
  };
  const handleCourseIdChangeReports = (e) => {
    setCourseIdReports(e.target.value);
  };
  const handleCourseIdChangeReviews = (e) => {
    setCourseIdReviews(e.target.value);
  };
  const handleMavIdChange = (e) => {
    setMavId(e.target.value);
  };

  const [componentVisibility, setComponentVisibility] = useState({
    studentinfo: false, // Set the initial state to hide all components
    reportsinfo: false,
    reviewsinfo: false,
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
        INSTRUCTOR MANAGEMENT
      </p>
      <hr width="100%" />
      <div class="grid-container-student-admin">
        <div>
          <div class="index-items">
            <ul>
              <li>
                <HashLink to="#manageinstructor">Manage Instructor</HashLink>
              </li>
              <li>
                <HashLink to="#managereports">Reports And Analytics</HashLink>
              </li>
              <li>
                <HashLink to="#managereviews">Reviews</HashLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div id="manageinstructor" style={{ textAlign: "left" }}>
            <p style={{ fontSize: "larger" }}>
              <b>Instructor Management</b>
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
              onClick={() => toggleComponent("instructorinfo")}
            >
              Search
            </button>
            {componentVisibility.instructorinfo ? (
              <Results
                data={instructorinfo.details}
                mavId={instructorinfo.Mavid}
              />
            ) : null}
          </div>
          <div id="managecourse" style={{ textAlign: "left" }}>
            <label for="idno"></label>
            <br />
            {componentVisibility.instructorinfo ? (
              <ResultsCourse data={instructorinfo.courses} />
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
              id="reportid"
              style={{ width: "50%" }}
              type="text"
              value={courseIdReports}
              onChange={handleCourseIdChangeReports}
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
              <Report
                grades={instructorinfo.courses}
                courseId={courseIdReports}
              />
            ) : null}
            <br />
            <br />
            <hr style={{ width: "100%" }} />
            <br />
          </div>
          <div id="managereviews" style={{ textAlign: "left" }}>
            <p style={{ fontSize: "larger" }}>
              <b>Reviews Management</b>
              <br />
              Enter Course Id and click on search button
            </p>
            <label for="idno"></label>
            <br />
            <input
              id="reviewid"
              style={{ width: "50%" }}
              type="text"
              value={courseIdReviews}
              onChange={handleCourseIdChangeReviews}
              placeholder="Enter Course Id"
              name="idno"
              required
            />
            {"\t"}
            <button
              type="submit"
              className="btn-edit"
              onClick={() => toggleComponent("reviewsinfo")}
            >
              Search
            </button>
            {componentVisibility.reviewsinfo ? (
              <Reviews
                data={instructorinfo.courses}
                courseId={courseIdReviews}
              />
            ) : null}
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
              <td>{course.coursename}</td>
              <td>{course.coursecode}</td>
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
        y: assignment.avgassignmentgrade,
      }));

      const quizzesData = currentCourse.quizzes.map((quiz) => ({
        x: quiz.quizname,
        y: quiz.avgquizgrade,
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
                <th> Average Score</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment, index) => (
                <tr key={`assignment-${index}`}>
                  <td>{assignment.assignmentname}</td>
                  <td>{assignment.avgassignmentgrade}</td>
                </tr>
              ))}
              {quizzes.map((quiz, index) => (
                <tr key={`quiz-${index}`}>
                  <td>{quiz.quizname}</td>
                  <td>{quiz.avgquizgrade}</td>
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

const Reviews = ({ data, courseId }) => {
  const course = data.find((course) => course.coursecode === courseId);

  return (
    <div>
      {courseId}
      {course ? (
        course.reviews.length > 0 ? (
          <ul>
            {course.reviews.map((review, index) => (
              <li key={index}>
                <h3
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {review}
                </h3>
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available for this course.</p>
        )
      ) : (
        <p>Course not found.</p>
      )}
    </div>
  );
};

export default InstructorAdmin;
