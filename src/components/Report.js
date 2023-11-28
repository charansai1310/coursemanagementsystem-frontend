import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import React, { useState } from "react";
function Reports() {
  const studentreportinfo = {
    mavid: "5248",
    report: "report Data",
  };
  const instructorreportinfo = {
    mavid: "5248",
    report: "report Data",
  };
  const coursereportinfo = {
    courseid: "5248",
    report: "report Data",
  };
  const coordinatorreportinfo = {
    mavid: "5248",
    report: "report Data",
  };
  const [componentVisibility, setComponentVisibility] = useState({
    studentreportinfo: false,
    instructorreportinfo: false,
    coordinatorreportinfo: false,
    coursereportinfo: false,
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
      <p style={{ fontSize: "x-large", fontWeight: "bold" }}>Reports</p>
      <hr width="100%" />
      <div class="grid-container-student-admin">
        <div>
          <div class="index-items">
            <ul>
              <li>
                <HashLink to="/report#studentreport">Student Reports</HashLink>
              </li>
              <li>
                <HashLink href="/report#instructorreport">
                  Instructor Reports
                </HashLink>
              </li>
              <li>
                <HashLink href="report#coordinatorreport">
                  Coordinator Reports
                </HashLink>
              </li>
              <li>
                <HashLink href="report#coursereport">Course Reports</HashLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div id="studentreport" style={{ textAlign: "left" }}>
            <p>Student report</p>
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
              onClick={() => toggleComponent("studentreportinfo")}
            >
              Search
            </button>
            <br />
            {componentVisibility.studentreportinfo ? (
              <Results data={studentreportinfo} />
            ) : null}
            <br />
            <br />
            <hr />
          </div>
          <div id="instructorreport" style={{ textAlign: "left" }}>
            <p>Instructor report</p>
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
              onClick={() => toggleComponent("instructorreportinfo")}
            >
              Search
            </button>
            <br />
            {componentVisibility.instructorreportinfo ? (
              <Results data={instructorreportinfo} />
            ) : null}
            <br />
            <br />
            <hr />
          </div>
          <div id="coordinatorreport" style={{ textAlign: "left" }}>
            <p>Coordinator report</p>
            Enter Coordinator Id and click on search button <br />
            <br />
            <label for="idno">
              <b>Coordinator ID</b>
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
              onClick={() => toggleComponent("coordinatorreportinfo")}
            >
              Search
            </button>
            <br />
            {componentVisibility.coordinatorreportinfo ? (
              <Results data={coordinatorreportinfo} />
            ) : null}
            <br />
            <br />
            <hr />
          </div>
          <div id="coursereport" style={{ textAlign: "left" }}>
            <p>Course report</p>
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
              onClick={() => toggleComponent("coursereportinfo")}
            >
              Search
            </button>
            <br />
            {componentVisibility.coursereportinfo ? (
              <Results data={coursereportinfo} />
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
export default Reports;

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
