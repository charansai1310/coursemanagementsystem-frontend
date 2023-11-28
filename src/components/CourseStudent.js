import "./Header.css";
import "./gridcontainer.css";
import "./formfeild.css";
import "./button.css";
import "./table.css";
import "./indexitems.css";
import "./Footer.css";
import Course1 from "./Course1.js";
import AssignmentList from "./AssignmentList.js";
import Grades from "./Grades.js";
import ReportsS from "./ReportsS.js";
import Quizzes from "./Quizzes.js";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useParamContext } from "./ParamContext.js";
import axios from "axios";
import { APIHOST } from "../env.js";
import { AuthContext } from "../contexts/AuthContext.js";
import Discussion from "./Discussion.js";

function CourseStudent() {

  const params = useParams();
  // const coursedata = JSON.parse(params.id);
  const [course, setCourse] = useState();
  const [authState, setAuthState] = useContext(AuthContext);


  const fetchCourses = async () => {
    const res = await axios.get(APIHOST + "/api/courses/" + params.id, {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    });
    console.log(res.data);
    setCourse(res.data);
  };

  const grades = {};
  const reports = {};
  const [componentVisibility, setComponentVisibility] = useState({
    course: true,
    assignment: false,
    quizzes: false,
    grades: false,
    reports: false,
    discussion: false,
  });

  const toggleComponent = (componentName) => {
    setComponentVisibility((prevVisibility) => ({
      ...prevVisibility,
      [componentName]: true,
    }));
    for (const v in componentVisibility) {
      if (v.localeCompare(componentName)) {
        setComponentVisibility((prevVisibility) => ({
          ...prevVisibility,
          [v]: false,
        }));
      }
    }
  };
  
  useEffect(() => {
    fetchCourses()
  }, [])

  if(course == null){
    return (
      <div>
        <h4>
          Loading...
        </h4>
      </div>
    )
  }

  return (
    <div className="page-container">
      <header class="header" id="headerid">
        <Link to="#headerid" class="logo">
          Maverick Brilliance
        </Link>
        <nav class="nav-items">
          <Link to="/StudentPage">Back</Link>
        </nav>
      </header>
      <p
        style={{ textAlign: "center", fontSize: "x-large", fontWeight: "bold" }}
      >
        {course.id}
      </p>
      <hr width="100%" />
      <div className="grid-container-course">
        <div>
          <div className="index-items">
            <ul>
              <li>
                <HashLink onClick={() => toggleComponent("course")}>
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink onClick={() => toggleComponent("course")}>
                  Syllabus
                </HashLink>
              </li>
              <li>
                <HashLink onClick={() => toggleComponent("course")}>
                  Course Objectives
                </HashLink>
              </li>
              <li>
                <Link onClick={() => toggleComponent("assignment")}>
                  Assignments
                </Link>
              </li>
              <li>
                <Link onClick={() => toggleComponent("quizzes")}>Quizzes</Link>
              </li>
              <li>
                <Link onClick={() => toggleComponent("grades")}>Grades</Link>
              </li>
              <li>
                <Link onClick={() => toggleComponent("discussion")}>Discussion</Link>
              </li>
              <li>
                <Link onClick={() => toggleComponent("reports")}>Reports</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {componentVisibility.course && <Course1 coursedata={course} />}
          {componentVisibility.assignment && <AssignmentList coursedata={course} />}
          {componentVisibility.quizzes && <Quizzes coursedata={course} />}
          {componentVisibility.grades && <Grades coursedata={course} />}
          {componentVisibility.reports && <ReportsS coursedata={course} />}
          {componentVisibility.discussion && <Discussion coursedata={course} />}
        </div>
        <div></div>
      </div>
      <footer className="footer" id="footer">
        <div className="copy">
          &copy; Copyright by Team 10, 2023. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};
export default CourseStudent;
