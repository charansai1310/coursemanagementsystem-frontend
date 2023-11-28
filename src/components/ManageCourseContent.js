import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React, { useState } from "react";
function ManageCourseContent() {
  const coursecontent = {
    mavid: "5248",
    101: "Introduction to Programming",
    102: "Data Structures And Algorithms",
    103: "Database Management",
  };
  const courseinfo = {
    mavid: "5248",
    101: "Introduction to Programming",
    102: "Data Structures And Algorithms",
    103: "Database Management",
  };
  const [componentVisibility, setComponentVisibility] = useState({
    courseinfo: false,
    coursecontent: false,
  });
  const toggleComponent = (componentName) => {
    setComponentVisibility((prevVisibility) => ({
      ...prevVisibility,
      [componentName]: !prevVisibility[componentName],
    }));
  };
  return (
    <div classNameName="page-container">
      <header className="header" id="headerid">
        <Link to="#headerid" className="logo">
          Maverick Brilliance
        </Link>
        <nav className="nav-items">
          <a href="javascript:history.back()">Back</a>
        </nav>
      </header>
      <p style={{ fontSize: "x-large", fontWeight: "bold" }}>
        Manage Course Content
      </p>
      <hr width="100%" />
      <div className="grid-container-student-admin">
        <div>
          <div className="index-items">
            <ul>
              <li>
                <HashLink to="#managecoursecontent">
                  Manage Course Content
                </HashLink>
              </li>
              <li>
                <HashLink href="#managecourseobjectives">
                  Manage Course Objectives
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div id="managecoursecontent" style={{ textAlign: "left" }}>
            <p>Manage Course Content</p>
            Enter Course Id and click on search button <br />
            <br />
            <label for="idno"></label>
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
              onClick={() => toggleComponent("coursecontent")}
            >
              Search
            </button>
            <br />
            {componentVisibility.coursecontent ? (
              <Results data={coursecontent} />
            ) : null}
            <hr />
          </div>
          <div id="managecourseobjectives" style={{ textAlign: "left" }}>
            <p>Manage Course Objectives</p>
            Enter Course Id and click on search button <br />
            <br />
            <label for="idno"></label>
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
              onClick={() => toggleComponent("courseinfo")}
            >
              Search
            </button>
            <br />
            {componentVisibility.courseinfo ? (
              <Results data={courseinfo} />
            ) : null}
            <br />
            <br />
            <hr />
          </div>
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

export default ManageCourseContent;

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
