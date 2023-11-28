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
import AIChatBot from "./AIChatBot.js";

const StudentPage = () => {
  const coursedata = [
    {
      id: "MB-CSE-0001",
      name: "Introduction to Programming",
      description:
        "This course introduces the fundamentals of computer programming and problem-solving using a high-level programming language. Students will learn to design, code, stest, and debug simple programs, laying the foundation for more advanced programming concepts.",
      objectives: [
        "Understand fundamental programming concepts.",
        "Write and analyze algorithms.",
        "Create programs using a high-level programming language.",
        "Debug and troubleshoot programming errors.",
        "Apply problem-solving skills to computational challenges.",
      ],
      prerequisites: "None",
    },
    {
      id: "MB-CSE-0002",
      name: "Data Structures And Algorithms",
      description:
        "This course delves into data structures and algorithms, teaching students how to design efficient algorithms and implement complex data structures. Topics include sorting, searching, and dynamic programming.",
      objectives: [
        "Understand the principles of data structures and algorithms.",
        "Analyze the time and space complexity of algorithms.",
        "Implement common data structures and algorithms.",
        "Apply algorithmic thinking to problem-solving.",
        "Evaluate and select appropriate data structures and algorithms for specific tasks.",
      ],
      prerequisites: "Introduction to Programming",
    },
    {
      id: "MB-CSE-0003",
      name: "Data Management",
      description:
        "Database Management explores the principles of database design and management. Students will learn to create and maintain databases, write SQL queries, and work with relational databases.",
      objectives: [
        "Understand the fundamental concepts of database systems.",
        "Design and implement relational databases.",
        "Write SQL queries to retrieve, manipulate, and manage data.",
        "Perform database administration tasks.",
        "Apply normalization techniques for data integrity.",
        "Understand emerging trends in database technologies.",
      ],
      prerequisites: "Introduction to Programming",
    },
  ];
  const navigate = useNavigate();
  const { setParam } = useParamContext();

  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [authState, setAuthState] = useContext(AuthContext);

  const handleButtonClick = (item) => {
    navigate("/CourseStudent/" + item.id);
  };

  const fetchCourses = async () => {
    const res = await axios.get(
      APIHOST + "/api/users/" + authState.userData.id + "/courses",
      {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      }
    );
    console.log(res.data);
    setCourses(res.data);
    setCoursesLoading(false)
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
              MB-CSE-0001
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
          <Link to="/ManageCourses">Manage Courses</Link>
          <SignOut/>
        </nav>
      </header>
      <br />
      <p className="p-pagetitle" style={{ textAlign: "left" }}>
        Dashboard
      </p>
      <hr width="67%" />
      <div>
        {
          coursesLoading ? "Loading..." : <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
          {courses.map((course) => getListItem(course))}
        </div>
        }
        <AIChatBot/>
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
      <p className="p-pagetitle">Announcements</p>
      <hr width="67%" />
      <br />
      <div className="p1" style={{ textAlign: "left" }}>
        No Announcements Added Yet
      </div>
      <footer className="footer" id="footer">
        <div className="copy">
          &copy; Copyright by Team 10, 2023. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default StudentPage;
