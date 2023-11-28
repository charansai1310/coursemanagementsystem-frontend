import "./Header.css";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
function Qaofficer() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <header className="header" id="headerid">
        <a href="#headerid" className="logo">
          Maverick brilliance
        </a>
        <nav className="nav-items">
          <a href="/Profile">Profile</a>
          <a href="/StudentAdmin">Students</a>
          <a href="/InstructorAdmin">Instructor</a>
          <a href="/CoordinatorAdmin">Coordinator</a>
          <a href="/">Sign Out</a>
        </nav>
      </header>
      <div className="grid-container-qaofficer">
        <div align="center">
          <button
            type="button"
            className="btn-qaofficer"
            onClick={() => navigate("/StudentAdmin")}
          >
            Manage Students
          </button>
          <br />
          <button
            type="button"
            className="btn-qaofficer"
            onClick={() => navigate("/CurriculumEvalution")}
          >
            Curriculum Evaluation
          </button>
          <br />
          <button
            type="button"
            className="btn-qaofficer"
            onClick={() => navigate("/ManageCourseContent")}
          >
            Manage Course Content
          </button>
          <br />
          <button
            type="button"
            className="btn-qaofficer"
            onClick={() => navigate("/FacultyDevelopment")}
          >
            Faculty Development
          </button>
          <br />
        </div>
        <div align="center">
          <button
            type="button"
            className="btn-qaofficer"
            onClick={() => navigate("/InstructorAdmin")}
          >
            Manage Instructors
          </button>
          <br />
          <button
            type="button"
            className="btn-qaofficer"
            onClick={() => navigate("/ImprovementInitiatives")}
          >
            Improvement Initiatives
          </button>
          <br />
          <button
            type="button"
            className="btn-qaofficer"
            onClick={() => navigate("/Report")}
          >
            Reports
          </button>
          <br />
          <button
            type="button"
            className="btn-qaofficer"
            onClick={() => navigate("/Reviews")}
          >
            Reviews
          </button>
          <br />
        </div>
        <div>
          <button className="chatbot-toggler">
            <span className="material-symbols-outlined">mode_comment</span>
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="chatbot">
            <header>
              <h2>Chatbot</h2>
            </header>
            <ul className="chatbox">
              <li className="chat incoming">
                <span className="material-symbols-outlined">smart_toy</span>
                <p>
                  Hi there 👋. <br /> How Can I help You Today?
                </p>
              </li>
            </ul>
            <div className="chat-input">
              <textarea placeholder="Enter a Message...." required></textarea>
              <span
                id="send-btn-qaofficer"
                className="material-symbols-outlined"
              >
                send
              </span>
            </div>
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

export default Qaofficer;
