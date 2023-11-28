import "./gridcontainer.css";
import "./paragraph.css";
import "./ChatBot.css";
import ChatBot from "./ChatBot.js";
import "./coursetile.css";
import "material-symbols";
import { useNavigate, Link } from "react-router-dom";
import { useParamContext } from "./ParamContext";
import { useContext, useEffect, useState } from "react";
import { APIHOST } from "../env.js";
import { AuthContext } from "../contexts/AuthContext.js";
import axios from "axios";
import SignOut from "./Signout.js";
function Instructor() {
  

  const navigate = useNavigate();
  const { setParam } = useParamContext();


  const handleButtonClick = (item) => {
    navigate("/CourseInstructor/" + item.id);
  };

  const [courses, setCourses] = useState([]);
  const [authState, setAuthState] = useContext(AuthContext);

  const fetchCourses = async () => {
    const res = await axios.get(
      APIHOST + "/api/users/" + authState.userData.id + "/courses-ins",
      {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      }
    );
    console.log(res.data);
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses()
  }, [])

  function getListItem(listItem) {
    return (
      <div>
        <div
          type="button"
          id={listItem.id}
          className="coursetile-p"
          onClick={() => handleButtonClick(listItem)}
        >
          <header>
            <div className="logo">MAVERICK BRILLIANCE</div>
          </header>
          <div style={{ marginLeft: "0.5%", fontSize: "large" }}>
            <br />
            <br />
            <b>
              <u>
                {listItem.id}
                <br />
                {listItem.name}
                <br />
              </u>
              2023 - Fall
            </b>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <header class="header" id="headerid">
        <Link to="#headerid" class="logo">
          Maverick Brilliance
        </Link>
        <nav class="nav-items">
          <Link to="/Profile">Profile</Link>
          <Link to="/ManageCoursesInstructor">Manage Courses</Link>
          <SignOut/>
        </nav>
      </header>
      <br />
      <p className="p-pagetitle" style={{ textAlign: "left" }}>
        Dashboard
      </p>
      <hr width="67%" />
      <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
          {courses.map((course) => getListItem(course))}
        </div>
        <div>
          <button class="chatbot-toggler">
            <span class="material-symbols-outlined">mode_comment</span>
            <span class="material-symbols-outlined">close</span>
          </button>
          <div class="chatbot">
            <header>
              <h2>Chatbot</h2>
            </header>
            <ul class="chatbox">
              <li class="chat incoming">
                <span class="material-symbols-outlined">smart_toy</span>
                <p>
                  Hi there 👋. <br /> How Can I help You Today?
                </p>
              </li>
            </ul>
            <div class="chat-input">
              <textarea placeholder="Enter a Message...." required></textarea>
              <span id="send-btn" class="material-symbols-outlined">
                send
              </span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer className="footer" id="footer">
        <div className="copy">
          &copy; Copyright by Team 10, 2023. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Instructor;
