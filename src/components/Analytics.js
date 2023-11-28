import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import React, { useState } from "react";
function Analytics() {
  const studentanalyticsinfo = {
    mavid: "5248",
    analytics: "Analytics Data",
  };
  const instructoranalyticsinfo = {
    mavid: "5248",
    analytics: "Analytics Data",
  };
  const courseanalyticsinfo = {
    courseid: "5248",
    analytics: "Analytics Data",
  };
  const [componentVisibility, setComponentVisibility] = useState({
    studentanalyticsinfo: false,
    instructoranalyticsinfo: false,
    courseanalyticsinfo: false,
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
      <p style={{ fontSize: "x-large", fontWeight: "bold" }}>Analytics</p>
      <hr width="100%" />
      <div class="grid-container-student-admin">
        <div>
          <div class="index-items">
            <ul>
              <li>
                <HashLink to="/Analytics#studentanalytics">
                  Student Anlytics
                </HashLink>
              </li>
              <li>
                <HashLink href="/Analytics#instructoranalytics">
                  Instructor Analytics
                </HashLink>
              </li>
              <li>
                <HashLink href="Analytics#courseanalytics">
                  Course Analytics
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div id="studentanalytics" style={{ textAlign: "left" }}>
            <p>Student Analytics</p>
            Enter Student Id and click on search button <br />
            <br />
            <label for="idno">
              <b>Student ID</b>
            </label>
            <br />
            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="Enter Id Number"
              name="idno"
              required
            />
            {"\t"}
            <button
              type="submit"
              className="btn-edit"
              onClick={() => toggleComponent("studentanalyticsinfo")}
            >
              Search
            </button>
            <br />
            {componentVisibility.studentanalyticsinfo ? (
              <Results data={studentanalyticsinfo} />
            ) : null}
            <br />
            <br />
            <hr />
          </div>
          <div id="instructoranalytics" style={{ textAlign: "left" }}>
            <p>Instructor Analytics</p>
            Enter Instructor Id and click on search button <br />
            <br />
            <label for="idno1">
              <b>Instructor ID</b>
            </label>
            <br />
            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="Enter Id Number"
              name="idno1"
              required
            />
            {"\t"}
            <button
              type="submit"
              className="btn-edit"
              onClick={() => toggleComponent("instructoranalyticsinfo")}
            >
              Search
            </button>
            <br />
            {componentVisibility.instructoranalyticsinfo ? (
              <Results data={instructoranalyticsinfo} />
            ) : null}
            <br />
            <br />
            <hr />
          </div>
          <div id="courseanalytics" style={{ textAlign: "left" }}>
            <p>Course Analytics</p>
            Enter Course Id and click on search button <br />
            <br />
            <label for="idno2">
              <b>Course ID</b>
            </label>
            <br />
            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="Enter Id Number"
              name="idno2"
              required
            />
            {"\t"}
            <button
              type="submit"
              className="btn-edit"
              onClick={() => toggleComponent("courseanalyticsinfo")}
            >
              Search
            </button>
            <br />
            {componentVisibility.courseanalyticsinfo ? (
              <Results data={courseanalyticsinfo} />
            ) : null}
            <br />
            <br />
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
export default Analytics;

const Results = ({ data }) => {
  const [studentData, setStudentData] = useState(data);
  const [isEditing, setIsEditing] = useState(false);

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
