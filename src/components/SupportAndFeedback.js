import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function SupportAndFeedback() {
  const studentsupportinfo = {
    mavid: "5248",
    name: "Charan Kondapaneni",
  };
  const reportinfo = {
    mavid: "5248",
    report: "Reports data",
  };
  const feedbackinfo = {
    mavid: "5248",
    101: "Permission1",
    102: "Permission2",
    103: "Permission3",
  };
  const [componentVisibility, setComponentVisibility] = useState({
    studentsupportinfo: false, // Set the initial state to hide all components
    reportinfo: false,
    feedbackinfo: false,
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
        <a href="#headerid" class="logo">
          Maverick br /illiance
        </a>
        <nav class="nav-items">
          <Link to="javascript:history.back()">Back</Link>
        </nav>
      </header>
      <p style={{ fontSize: "x-large", fontWeight: "bold" }}>
        SUPPORT AND FEEDBACK
      </p>
      <hr width="100%" />
      <div class="grid-container-student-admin">
        <div>
          <div class="index-items">
            <ul>
              <li>
                <HashLink to="#studentsupport">
                  Student Support Programs
                </HashLink>
              </li>
              <li>
                <HashLink to="#reports">Reports</HashLink>
              </li>
              <li>
                <HashLink to="#feedback">Feedback</HashLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div id="studentsupport" style={{ textAlign: "left" }}>
            <p>Student Support Programs</p>
            Enter Student Id and click on Enroll button <br />
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
            <button type="submit" className="btn-edit">
              Enroll
            </button>
            {"\t"}
            {"\t"}
            <button
              type="submit"
              className="btn-edit"
              onClick={() => toggleComponent("studentsupportinfo")}
            >
              View
            </button>
            <br />
            {componentVisibility.studentsupportinfo ? (
              <Results data={studentsupportinfo} />
            ) : null}
            <br />
            <br />
            <hr />
          </div>
          <div id="reports" style={{ textAlign: "left" }}>
            <p>Reports</p>
            Enter Student Id and click on search button <br />
            <br />
            <label for="idno1">
              <b>Student ID</b>
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
              onClick={() => toggleComponent("reportinfo")}
            >
              Search
            </button>
            <br />
            {componentVisibility.reportinfo ? (
              <Results data={reportinfo} />
            ) : null}
            <br />
            <br />
            <hr />
          </div>
          <div id="feedback" style={{ textAlign: "left" }}>
            <p style={{ fontSize: "larger" }}>Feedback</p>
            Enter QA Officer and click on search button <br />
            <br />
            <label for="idno2"></label>
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
              onClick={() => toggleComponent("feedbackinfo")}
            >
              Search
            </button>
            <br />
            {componentVisibility.feedbackinfo ? (
              <Results data={feedbackinfo} />
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
export default SupportAndFeedback;

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
