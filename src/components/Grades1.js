import { useState } from "react";
const Grades1 = () => {
  const studentinfo = {
    mavid: "5248",
  };
  const grades = {
    courseid: "MB-CSE-0001",
    assignments: [
      {
        assignmentname: "Assignment 1",
        assignmentgrade: 90,
      },
      {
        assignmentname: "Assignment 2",
        assignmentgrade: 85,
      },
      {
        assignmentname: "Assignment 3",
        assignmentgrade: 65,
      },
      {
        assignmentname: "Assignment 4",
        assignmentgrade: 40,
      },
    ],
    quizzes: [
      {
        quizname: "Quiz 1",
        quizgrade: 90,
      },
      {
        quizname: "Quiz 2",
        quizgrade: 85,
      },
      {
        quizname: "Quiz 3",
        quizgrade: 65,
      },
    ],
  };
  const [componentVisibility, setComponentVisibility] = useState({
    gradeinfo: false,
  });
  const toggleComponent = (componentName) => {
    setComponentVisibility((prevVisibility) => ({
      ...prevVisibility,
      [componentName]: !prevVisibility[componentName],
    }));
  };
  return (
    <div id="managegrades" style={{ textAlign: "left" }}>
      <p style={{ fontSize: "larger" }}>
        <br />
        Enter Id and click on search button
      </p>
      <label for="idno"></label>
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
        onClick={() => toggleComponent("gradeinfo")}
      >
        Search
      </button>
      <br />
      {componentVisibility.gradeinfo ? <Grades grades={grades} /> : null}
      <br />
      <br />
      <hr style={{ width: "100%" }} />
      <br />
    </div>
  );
};

export default Grades1;

const Grades = ({ grades }) => {
  const assignments = grades.assignments;
  const quizzes = grades.quizzes;
  return (
    <div className="page-container">
      <hr width="100%" />
      <div className="grid-container-course">
        <div></div>
        <div>
          <div class="grades">
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments.map((assignment, index) => (
                    <tr key={index}>
                      <td>{assignment.assignmentname}</td>
                      <td>{assignment.assignmentgrade}</td>
                    </tr>
                  ))}
                  {quizzes.map((quiz, index) => (
                    <tr key={index}>
                      <td>{quiz.quizname}</td>
                      <td>{quiz.quizgrade}</td>
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
};
