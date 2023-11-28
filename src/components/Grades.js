import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { APIHOST } from "../env";
function Grades({coursedata}) {

  const [assGrades, setAssGrades] = useState([])
  const [quizGrades, setquizGrades] = useState([])
  const [authState, setAuthState] = useContext(AuthContext);


  const fetchAssignments = async () => {
    const res = await axios.get(APIHOST + "/api/assessments/" + coursedata.id + "/" + authState.userData.id + "/assignment", {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    });
    console.log(res.data);
    setAssGrades(res.data)
  }

  const fetchQuizes = async () => {
    const res = await axios.get(APIHOST + "/api/assessments/" + coursedata.id + "/" + authState.userData.id + "/quiz", {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    });
    console.log(res.data);
    setquizGrades(res.data)
  }

  useEffect(() => {
    fetchAssignments()
    fetchQuizes()
  }, [])


  const studentinfo = {
    mavid: "5248",
  };
  // const grades = {
  //   courseid: "MB-CSE-0001",
  //   assignments: [
  //     {
  //       assignmentname: "Assignment 1",
  //       assignmentgrade: 90,
  //     },
  //     {
  //       assignmentname: "Assignment 2",
  //       assignmentgrade: 85,
  //     },
  //     {
  //       assignmentname: "Assignment 3",
  //       assignmentgrade: 65,
  //     },
  //     {
  //       assignmentname: "Assignment 4",
  //       assignmentgrade: 40,
  //     },
  //   ],
  //   quizzes: [
  //     {
  //       quizname: "Quiz 1",
  //       quizgrade: 90,
  //     },
  //     {
  //       quizname: "Quiz 2",
  //       quizgrade: 85,
  //     },
  //     {
  //       quizname: "Quiz 3",
  //       quizgrade: 65,
  //     },
  //   ],
  // };
  const assignments = assGrades.assignments;
  const quizzes = assGrades.quizzes;
  return (
    <div className="page-container">
      <hr width="100%" />
      <div className="grid-container-course">
        <div></div>
        <div>
          <div class="grades">
            <h2>Grades</h2>
            <br />
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {assGrades.map((assignment, index) => (
                    <tr key={index}>
                      <td>{assignment['assignment_name']}</td>
                      <td>{assignment['score']}</td>
                    </tr>
                  ))}
                  {quizGrades.map((quiz, index) => (
                    <tr key={index}>
                      <td>{quiz['assignment_name']}</td>
                      <td>{quiz['score']}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
}
export default Grades;
