import "./Header.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import "./gridcontainer.css";
import { HashLink } from "react-router-hash-link";

const QaOfficerAdmin = () => {
  const [courseIdReviews, setCourseIdReviews] = useState("");
  const [courseIdReports, setCourseIdReports] = useState("");
  const [mavId, setMavId] = useState("");
  const coordinatorinfo = {
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
        populationofstudents: "60",
        avgattendance: "40",
        studentpasspercentage: "54",
        dropoutrates: "5",
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
        populationofstudents: "60",
        avgattendance: "40",
        studentpasspercentage: "54",
        dropoutrates: "5",
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
        populationofstudents: "60",
        avgattendance: "40",
        studentpasspercentage: "54",
        dropoutrates: "5",
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
        QAOFFICER MANAGEMENT
      </p>
      <hr width="100%" />
      <div class="grid-container-student-admin">
        <div>
          <div class="index-items">
            <ul>
              <li>
                <HashLink to="#manageinstructor">Manage Coordinator</HashLink>
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
              <b>QA Officer Management</b>
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
              onClick={() => toggleComponent("coordinatorinfo")}
            >
              Search
            </button>
            {componentVisibility.coordinatorinfo ? (
              <Results
                data={coordinatorinfo.details}
                mavId={coordinatorinfo.Mavid}
              />
            ) : null}
          </div>
          <div id="managecourse" style={{ textAlign: "left" }}>
            <label for="idno"></label>
            <br />
            {componentVisibility.coordinatorinfo ? (
              <ResultsCourse data={coordinatorinfo.courses} />
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
              <CoordinatorReport
                data={coordinatorinfo.courses}
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
                data={coordinatorinfo.courses}
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

const CoordinatorReport = ({ data, courseId }) => {
  const course = data.find((course) => course.coursecode === courseId);

  if (!course) {
    return <div>Course data not found for this courseId.</div>;
  }

  // Extracting dynamic labels and data for line charts
  const assignmentLabels = course.assignments.map(
    (assignment) => assignment.assignmentname
  );
  const assignmentData = course.assignments.map(
    (assignment) => assignment.avgassignmentgrade
  );

  const quizLabels = course.quizzes.map((quiz) => quiz.quizname);
  const quizData = course.quizzes.map((quiz) => quiz.avgquizgrade);

  // Dynamic labels and data for pie chart
  const pieLabels = ["Attendance", "Pass Percentage", "Dropouts"];
  const pieData = [
    course.avgattendance,
    course.studentpasspercentage,
    course.dropoutrates,
  ];

  // Line chart data for assignments and quizzes
  const assignmentChartData = {
    labels: assignmentLabels,
    datasets: [
      {
        label: "Assignments",
        data: assignmentData,
        fill: false,
        borderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const quizChartData = {
    labels: quizLabels,
    datasets: [
      {
        label: "Quizzes",
        data: quizData,
        fill: false,
        borderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  // Pie chart data for attendance, pass percentage, and dropouts
  const pieChartData = {
    labels: pieLabels,
    datasets: [
      {
        label: "Overview",
        data: pieData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  };

  return (
    <div>
      {/* Line chart for assignments */}
      <Line data={assignmentChartData} />

      {/* Line chart for quizzes */}
      <Line data={quizChartData} />

      {/* Pie chart for attendance, pass percentage, and dropouts */}
      <Pie data={pieChartData} />
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

export default QaOfficerAdmin;
