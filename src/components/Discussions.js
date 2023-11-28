import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function Discussions() {
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
      <p
        style={{ textAlign: "center", fontSize: "x-large", fontWeight: "bold" }}
      >
        Course ID
      </p>
      <hr width="100%" />
      <div className="grid-container-course">
        <div>
          <div className="index-items">
            <ul>
              <li>
                <HashLink to="/Course">Home</HashLink>
              </li>
              <li>
                <HashLink to="/Course">Syllabus</HashLink>
              </li>
              <li>
                <HashLink to="/Course">Course Objectives</HashLink>
              </li>
              <li>
                <HashLink to="/Course">Faculty Info</HashLink>
              </li>
              <li>
                <Link to="/Assignment">Assignments</Link>
              </li>
              <li>
                <Link to="/Quizzes">Quizzes</Link>
              </li>
              <li>
                <Link to="/Grades">Grades</Link>
              </li>
              <li>
                <Link to="/ReportsS">Reports</Link>
              </li>
              <li>
                <Link to="/Discussions">Discussions</Link>
              </li>
              <li>
                <Link to="/Resources">Resources</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class="grades">
            <p>Discussions</p>
            <p>No Discussions added yet</p>
          </div>
        </div>
        <div>
          <h4>To Do</h4>
          <hr width="100%" />
          <p>Nothing For Now</p>
          <br />
          <h4>Feedback</h4>
          <hr width="100%" />
          <p>Nothing For Now</p>
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
export default Discussions;
