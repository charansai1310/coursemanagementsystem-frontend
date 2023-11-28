import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { APIHOST } from "../env.js";
import { AuthContext } from "../contexts/AuthContext.js";

function Quizzes1({coursedata}) {
  const [quiz1, setquiz1] = useState([]);
  const [boxOpen, setBoxOpen] = useState(false);
  const [quiz, setQuiz] = useState(false);
  const [quizToggle, setQuizToggle] = useState(true);
  const [authState, setAuthState] = useContext(AuthContext);


  const fetchAssignments = async () => {
    const res = await axios.get(APIHOST + "/api/courses/" + coursedata.id + "/assessments/quiz", {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    });
    console.log(res.data);
    setquiz1(res.data)
  }

  useEffect(() => {
    fetchAssignments()
  }, [])

  const toggleBox = () => {
    setBoxOpen(!boxOpen);
  };
  const handleGradeQuiz = () => {
    setQuiz(!quiz);
    setQuizToggle(!quizToggle);
  };

  const handlequizInfo = (data) => {
    setBoxOpen(!boxOpen);
    if (data) {
      setquiz1(
        [
          ...quiz1,
          data,
        ]
      )
    } else {
      window.alert("Assignment Not Added");
    }
  };

  return (
    <div className="page-container">
      <hr width="100%" />
      <div className="grid-container-course">
        <div></div>
        {quizToggle && (
          <div>
            <div class="quiz">
              <p>Quizzes</p>
            </div>
            <div>
              <table className="tablecss">
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Score</th>
                  <th>Actions</th>
                </tr>
                <tbody>
                  {quiz1.map((quiz, index) => (
                    <tr key={index}>
                      <td>{quiz.name}</td>
                      <td>{quiz['created_at']}</td>
                      <td>{quiz.maxscore}</td>
                      <td>
                        <button onClick={handleGradeQuiz}>Grade Quiz</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <div>
                <button type="submit" class="btn-profile" onClick={toggleBox}>
                  Add quiz
                </button>
              </div>
            </div>
            {boxOpen && (
              <div id="box">
                <QuestionForm boxOpen={boxOpen} quizInfo={handlequizInfo} />
              </div>
            )}
          </div>
        )}
        {quiz && <GradeQuiz quiz={quiz} onHide={handleGradeQuiz} />}
        <div></div>
      </div>
    </div>
  );
}
export default Quizzes1;

const QuestionForm = ({ boxOpen, quizInfo }) => {
  const [quizName, setquizName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [authState, setAuthState] = useContext(AuthContext);


  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handlequizNameChange = (event) => {
    setquizName(event.target.value);
  };

  const data = {
    quizName: quizName,
    dueDate: dueDate,
  };

  const handleSubmit = async() => {
    // Handle the submission logic, e.g., send the question and due date to a server
    // You can add additional logic here, such as sending the data to a server.
    const data = {
      name: quizName,
      description: "Quiz Description",
      maxscore: 100,
      courseid: 2,
      weightage: 50,
      type: "quiz"
    };
    const res = await axios.post(APIHOST + '/api/assessments', data, {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      }
    })
    console.log(res.data)
    quizInfo(data);
  };

  return (
    <div>
      {boxOpen && (
        <div
          style={{
            position: "absolute",
            top: "32%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            margin: "20px" /* Adjust the margin to set the position */,
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            width: "700px",
            height: "500px",
            background: "white",
            border: "black",
            marginTop: "10px",
            boxShadow:
              "0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)",
            opacity: 1,
          }}
        >
          <label>
            <h2>Question</h2>
            <br />
          </label>
          <label>
            <input
              style={{ width: "84%" }}
              placeholder="Enter quiz Name"
              type="text"
              value={quizName}
              onChange={handlequizNameChange}
            />
          </label>

          <br />
          <br />
          <br />
          <label>
            Date:{"\t"}
            {"\t"}
            {"\t"}
            <input
              style={{ border: "1px solid black" }}
              type="date"
              value={dueDate}
              onChange={handleDueDateChange}
            />
          </label>
          <br />
          <br />
          <div>
            <button className="btn-edit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const GradeQuiz = ({ quiz, onHide }) => {
  const [studentsinfo, setStudentsInfo] = useState({
    courseid: "MB-CSE-0001",
    students: [
      {
        mavid: "5248",
        name: "Charan",
        score: 0,
      },
      {
        mavid: "5248",
        name: "Charan",
        score: 0,
      },
      {
        mavid: "5248",
        name: "Charan",
        score: 0,
      },
      {
        mavid: "5248",
        name: "Charan",
        score: 0,
      },
    ],
  });
  const handleUpdateScore = (index, newScore) => {
    setStudentsInfo((prevStudentsInfo) => {
      const updatedStudents = [...prevStudentsInfo.students];
      updatedStudents[index].score = newScore;
      return { ...prevStudentsInfo, students: updatedStudents };
    });
  };

  const handleScoreChange = (index, event) => {
    const newScore = parseInt(event.target.value);
    handleUpdateScore(index, newScore);
  };
  return (
    <div>
      {quiz && (
        <div>
          <h2>Grade Assignment</h2>
          {studentsinfo.courseid}
          <br />
          <br />
          <table>
            <thead>
              <tr>
                <th>MAVID</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {studentsinfo.students.map((student, index) => (
                <tr key={index}>
                  <td>{student.mavid}</td>
                  <td>{student.name}</td>
                  <td>
                    <input
                      type="number"
                      value={student.score}
                      onChange={(e) => handleScoreChange(index, e)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="submit" class="btn-profile" onClick={onHide}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};
