import "./Header.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./gridcontainer.css";
import { HashLink } from "react-router-hash-link";
function CourseObjectivesAdmin() {
  const courseinfo = [
    {
      courscode: "MB-CSE-0001",
      courseobjectives: [
        "Understand fundamental programming concepts.",
        "Write and analyze algorithms.",
        "Create programs using a high-level programming language.",
        "Debug and troubleshoot programming errors.",
        "Apply problem-solving skills to computational challenges.",
      ],
    },
    {
      courscode: "MB-CSE-0002",
      courseobjectives: [
        "Understand fundamental programming concepts.",
        "Write and analyze algorithms.",
        "Create programs using a high-level programming language.",
        "Debug and troubleshoot programming errors.",
        "Apply problem-solving skills to computational challenges.",
      ],
    },
    {
      courscode: "MB-CSE-0003",
      courseobjectives: [
        "Understand the principles of data structures and algorithms.",
        "Analyze the time and space complexity of algorithms.",
        "Implement common data structures and algorithms.",
        "Apply algorithmic thinking to problem-solving.",
        "Evaluate and select appropriate data structures and algorithms for specific tasks.",
      ],
    },
  ];
  const [courseId, setCourseId] = useState("");

  const [componentVisibility, setComponentVisibility] = useState({
    courseinfo: false,
  });

  const handleCourseSelection = (courseId) => {
    setCourseId(courseId);
  };
  const toggleComponent = (componentName) => {
    setComponentVisibility((prevVisibility) => ({
      ...prevVisibility,
      [componentName]: !prevVisibility[componentName],
    }));
  };
  return (
    <div className="page-container">
      <header class="header" id="headerid">
        <a href="#headerid" class="logo">
          Maverick Brilliance
        </a>
        <nav class="nav-items">
          <Link to="javascript:history.back()">Back</Link>
        </nav>
      </header>
      <p style={{ fontSize: "x-large", fontWeight: "bold" }}>
        COURSE OBJECTIVES
      </p>
      <hr width="100%" />
      <div class="grid-container-student-admin">
        <div>
          <div class="index-items">
            <ul>
              <li>
                <HashLink to="/CourseObjectivesAdmin#courseobjectives">
                  Edit Course Objectives
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div id="courseobjectives" style={{ textAlign: "left" }}>
            <p style={{ fontSize: "larger" }}>Course Objectives</p>
            Enter Course Id and click on search button <br />
            <br />
            <label for="idno">
              <b>Course ID</b>
            </label>
            <br />
            <input
              style={{ width: "50%" }}
              type="text"
              onChange={(e) => handleCourseSelection(e.target.value)}
              placeholder="Enter Id Number"
              name="idno"
              required
            />
            {"\t"}
            <button
              type="submit"
              className="btn-edit"
              onClick={() => toggleComponent("courseinfo")}
            >
              Search
            </button>
            <br />
            {componentVisibility.courseinfo ? (
              <Results data={courseinfo} courseId={courseId} />
            ) : null}
            <hr />
          </div>
        </div>
      </div>
      <footer class="footer" id="footer">
        <div class="copy">
          &copy; Copyright by Team 10, 2023. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default CourseObjectivesAdmin;

const Results = ({ data, courseId }) => {
  const [courseObjectives, setCourseObjectives] = useState([]);
  const [editedObjectives, setEditedObjectives] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const course = data?.coursecode === courseId ? data.courseobjectives : null;
    if (course) {
      setCourseObjectives(course);
      setEditedObjectives([...course]);
    } else {
      const defaultCourse = data.find(
        (course) => course.courscode === courseId
      );
      if (defaultCourse) {
        setCourseObjectives(defaultCourse.courseobjectives);
        setEditedObjectives([...defaultCourse.courseobjectives]);
      }
    }
  }, [data, courseId]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save edited objectives to the backend or perform desired action
    console.log("Edited objectives:", editedObjectives);
    // Additional logic to save changes to the backend or state management
  };

  const handleInputChange = (index, value) => {
    const updatedObjectives = [...editedObjectives];
    updatedObjectives[index] = value;
    setCourseObjectives(updatedObjectives);
  };

  return (
    <div>
      <h2>Course Id: {courseId}</h2>
      {isEditing ? (
        <div>
          <h3>Course Objectives:</h3>
          <table>
            {editedObjectives.map((objective, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={objective}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </table>
          <br />
          <button className="btn-edit" onClick={handleSave}>
            Save Objectives
          </button>
          <br />
        </div>
      ) : (
        <div>
          <h3>Course Objectives:</h3>
          <table>
            {courseObjectives.map((objective, index) => (
              <tr key={index}>
                <td>{objective}</td>
              </tr>
            ))}
          </table>
          <br />
          <button className="btn-edit" onClick={handleEdit}>
            Edit Objectives
          </button>
          <br />
        </div>
      )}
    </div>
  );
};
