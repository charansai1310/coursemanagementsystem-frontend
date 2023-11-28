import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import React, { useState } from "react";
function Reviews() {
  const coordinatorreviewsinfo = {
    mavid: "5248",
    Reviews: "Reviews Data",
  };
  const instructorreviewsinfo = {
    mavid: "5248",
    Reviews: "Reviews Data",
  };
  const coursereviewsinfo = {
    courseid: "5248",
    Reviews: "Reviews Data",
  };
  const [componentVisibility, setComponentVisibility] = useState({
    coordinatorreviewsinfo: false,
    instructorreviewsinfo: false,
    coursereviewsinfo: false,
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
      <p style={{ fontSize: "x-large", fontWeight: "bold" }}>Reviews</p>
      <hr width="100%" />
      <div class="grid-container-student-admin">
        <div>
          <div class="index-items">
            <ul>
              <li>
                <HashLink to="/reviews#coordinatorreviews">
                  Coordinator Reviews
                </HashLink>
              </li>
              <li>
                <HashLink href="/reviews#instructorreviews">
                  Instructor Reviews
                </HashLink>
              </li>
              <li>
                <HashLink href="reviews#coursereviews">Course Reviews</HashLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div id="instructorReviews" style={{ textAlign: "left" }}>
            <p>Instructor Reviews</p>
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
              onClick={() => toggleComponent("instructorreviewsinfo")}
            >
              Search
            </button>
            <br />
            {componentVisibility.instructorreviewsinfo ? (
              <Results data={instructorreviewsinfo} />
            ) : null}
            <br />
            <br />
            <hr />
          </div>
          <div id="coordinatorreviews" style={{ textAlign: "left" }}>
            <p>Coordinator Reviews</p>
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
              onClick={() => toggleComponent("coordinatorreviewsinfo")}
            >
              Search
            </button>
            <br />
            {componentVisibility.coordinatorreviewsinfo ? (
              <Results data={coordinatorreviewsinfo} />
            ) : null}
            <br />
            <br />
            <hr />
          </div>
          <div id="courseReviews" style={{ textAlign: "left" }}>
            <p>Course Reviews</p>
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
              onClick={() => toggleComponent("coursereviewsinfo")}
            >
              Search
            </button>
            <br />
            {componentVisibility.coursereviewsinfo ? (
              <Results data={coursereviewsinfo} />
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
export default Reviews;

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
