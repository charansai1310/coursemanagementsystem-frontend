import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APIHOST } from "../env";
import { AuthContext } from "../contexts/AuthContext";


function Quizzes({coursedata}) {


  const [quizVisibility, setQuizVisibility] = useState(false);

  const [quizes, setQuizes] = useState([]);
  const [authState, setAuthState] = useContext(AuthContext);


  const handleQuiz = () => {
    setQuizVisibility(!quizVisibility);
  };

  const fetchAssignments = async () => {
    const res = await axios.get(APIHOST + "/api/courses/" + coursedata.id + "/assessments/quiz", {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    });
    console.log(res.data);
    setQuizes(res.data)
  }

  useEffect(() => {
    fetchAssignments()
  }, [])

  const quiz = {
    courseid: "MB-CSE-001",
    quizzes: [
      {
        quizname: "Quiz 1",
        date: "Aug 20 by 11:59 PM",
        score: "100",
      },
      {
        quizname: "Quiz 2",
        date: "Aug 20 by 11:59 PM",
        score: "100",
      },
      {
        quizname: "Quiz 3",
        date: "Aug 20 by 11:59 PM",
        score: "100",
      },
    ],
  };

  return (
    <div className="page-container">
      <hr width="100%" />
      <div className="grid-container-course">
        <div></div>
        <div>
          <div class="quiz">
            <h2>Quizzes</h2>
            <br />
          </div>
          <div>
            <table id="quizTable">
              <thead>
                <tr>
                  <th>Quiz Name</th>
                  <th>Date</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {quizes.map((quiz, index) => (
                  <tr key={index}>
                    <td>{quiz.name}</td>
                    <td>{quiz['created_at']}</td>
                    <td>{quiz.maxscore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <br />

            {/* {quizVisibility && (
              <Quiz quizVisibility={quizVisibility} onHide={handleQuiz} />
            )} */}
          </div>
        </div>
      </div>
      <script>
        var element = document.getElementById('quizTable'); element.style.width
        = '300px';
      </script>
      <footer className="footer" id="footer">
        <div className="copy">
          &copy; Copyright by Team 10, 2023. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
export default Quizzes;

// function Quiz({ quizVisibility, onHide }) {
//   const [quiz, setQuiz] = useState(null);

//   const handleQuizChange = (event) => {
//     const q = event.target.value;
//     setQuiz(q);
//   };

//   const handleSubmit = () => {
//     if (quiz) {
//       // Here, you can implement your logic for file submission, such as sending it to a server.
//       window.alert("Quiz Submitted Successfully");

//       // Reset the selected file after submission if needed.
//       setQuiz(null);
//     } else {
//       window.alert("Quiz Not Submitted");
//     }
//   };

//   const handleClick = () => {
//     handleSubmit();
//     onHide();
//   };

//   return (
//     <div>
//       {quizVisibility && (
//         <div>
//           <h2>Quiz Attempt</h2>
//           <button
//             className="btn-edit"
//             align="center"
//             type="submit"
//             onClick={handleClick}
//           >
//             Submit Quiz
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
