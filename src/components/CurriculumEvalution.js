import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function CurriculumEvalution() {
  return (
    <div classNameName="page-container">
      <header className="header" id="headerid">
        <Link to="#headerid" className="logo">
          Maverick Brilliance
        </Link>
        <nav className="nav-items">
          <Link to="javascript:history.back()">Back</Link>
        </nav>
      </header>
      <p style={{ fontSize: "x-large", fontWeight: "bold" }}>
        CURRICULUM EVALUATION
      </p>
      <hr width="100%" />
      <div className="grid-container-student-admin">
        <div>
          <div className="index-items">
            <ul>
              <li>
                <HashLink to="#courseobjectives">
                  Reviews for Course Objectives
                </HashLink>
              </li>
              <li>
                <HashLink to="#instructorreviews">
                  Reviews for Instructors
                </HashLink>
              </li>
              <li>
                <HashLink to="#studentadmission">
                  Student Admission Report
                </HashLink>
              </li>
              <li>
                <HashLink to="#gradereports">Grade Reports</HashLink>
              </li>
              <li>
                <HashLink to="#careerdifferentiation">
                  Career Differentiation
                </HashLink>
              </li>
              <li>
                <HashLink to="#socialresponsibility">
                  Social Responsibility
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div id="curriculumevaluation" style={{ textAlign: "left" }}>
            <p style={{ fontSize: "larger" }}>
              <b>Curriculum Evaluation</b>
            </p>
            Enter Course Id and click on search button <br />
            <br />
            <label for="idno">
              <b>Course ID</b>
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
            <button type="submit">Search</button>
            <hr />
          </div>
          <div id="courseobjectives" style={{ textAlign: "left" }}>
            <p style={{ fontSize: "larger" }}>
              <b>Reviews for Course Objectives</b>
            </p>
            <p>Course Objectives' reviews will be shown in this space</p>
            <hr />
          </div>
          <div id="instructorreviews" style={{ textAlign: "left" }}>
            <p style={{ fontSize: "larger" }}>
              <b>Reviews for Instructors</b>
            </p>
            <p>Instructor's Reviews will be shown in this space</p>
            <hr />
          </div>
          <div id="studentadmission" style={{ textAlign: "left" }}>
            <p style={{ fontSize: "larger" }}>
              <b>Student Admission Report</b>
            </p>
            <p>Student Admission report will be shown in this space</p>
            <hr />
          </div>
          <div id="gradereports" style={{ textAlign: "left" }}>
            <p style={{ fontSize: "larger" }}>
              <b>Grade Reports</b>
            </p>
            <p>Grade Reports for the course will be shown in this space</p>
            <hr />
          </div>
          <div id="careerdifferentiation" style={{ textAlign: "left" }}>
            <p style={{ fontSize: "larger" }}>
              <b>Career Differentiation</b>
            </p>
            <p>
              Career Differentiation by the course will be shown in this space
            </p>
            <hr />
          </div>
          <div id="socialresponsibility" style={{ textAlign: "left" }}>
            <p style={{ fontSize: "larger" }}>
              <b>Social Responsibility</b>
            </p>
            <p>
              Social Responsibility of the course will be shown in this space
            </p>
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

export default CurriculumEvalution;
