import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { APIHOST } from "../env.js";
import { AuthContext } from "../contexts/AuthContext.js";

function Assignments1({coursedata}) {
  const [assignment1, setAssignment1] = useState([]);
  const [boxOpen, setBoxOpen] = useState(false);
  const [grade, setGrade] = useState(false);
  const [gradeToggle, setGradeToggle] = useState(true);
  const [authState, setAuthState] = useContext(AuthContext);

  const [selected, setSelected] = useState(null);


  const fetchAssignments = async () => {
    const res = await axios.get(APIHOST + "/api/courses/" + coursedata.id + "/assessments/assignment", {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    });
    console.log(res.data);
    setAssignment1(res.data)
  }

  useEffect(() => {
    fetchAssignments()
  }, [])


  const toggleBox = () => {
    setBoxOpen(!boxOpen);
  };

  const handleAssignmentInfo = (data) => {
    setBoxOpen(!boxOpen);
    if (data) {
      setAssignment1(
        [
          ...assignment1,
          data,
        ]
      )
    } else {
      window.alert("Assignment Not Added");
    }
  }

  const handleGradeAssignment = (assignment) => {
    setSelected(assignment)
    setGrade(!grade);
    setGradeToggle(!gradeToggle);
  }

  return (
    console.log(assignment1),
    <div className="page-container">
      <hr width="100%" />
      <div className="grid-container-course">
        <div></div>
        <div>
          {gradeToggle && (
            <div>
              <div class="quiz">
                <p>Assignments</p>
              </div>
              <div>
                <table className="tablecss">
                  <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Actions</th>
                  </tr>
                  <tbody>
                    {assignment1.map((assignment, index) => (
                      <tr key={index}>
                        <td>{assignment.name}</td>
                        <td>{assignment.maxscore}</td>
                        <td>
                          <button onClick={handleGradeAssignment(assignment)}>
                            Grade Assignment
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <div>
                  <button type="submit" class="btn-profile" onClick={toggleBox}>
                    Add Assignment
                  </button>
                </div>
              </div>
            </div>
          )}
          {boxOpen && (
            <div id="box">
              <QuestionForm
                boxOpen={boxOpen}
                assignmentInfo={handleAssignmentInfo}
              />
            </div>
          )}
          {(grade) && (
            <GradeAssignment selected={selected} grade={grade} onHide={handleGradeAssignment} />
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default Assignments1;

const QuestionForm = ({ boxOpen, assignmentInfo }) => {
  const [question, setQuestion] = useState("");
  const [assignmentName, setAssignmentName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [authState, setAuthState] = useContext(AuthContext);


  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAssignmentNameChange = (event) => {
    setAssignmentName(event.target.value);
  };

  // const data = {
  //   name: assignmentName,
  //   description: question,
  //   maxscore: 100
  // };

  const handleSubmit = async () => {
    // Handle the submission logic, e.g., send the question and due date to a server
    // You can add additional logic here, such as sending the data to a server.
    const data = {
      name: assignmentName,
      description: question,
      maxscore: 100,
      courseid: 2,
      weightage: 50,
      type: "assignment"
    };
    const res = await axios.post(APIHOST + '/api/assessments', data, {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      }
    })
    console.log(res.data)
    assignmentInfo(data);
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
            height: "700px",
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
              placeholder="Enter Assignment Name"
              type="text"
              value={assignmentName}
              onChange={handleAssignmentNameChange}
            />
          </label>
          <label>
            <textarea
              style={{
                border: "1px solid black",
              }}
              rows="10"
              cols="70"
              placeholder="Enter Question for the Assignment"
              name="ii"
              value={question}
              onChange={handleQuestionChange}
              required
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            Due Date:{"\t"}
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

const GradeAssignment = ({ selected, grade, onHide }) => {
  const [submissions, setSubmissions] = useState([])
  const [authState, setAuthState] = useContext(AuthContext);

  const fetchSybmissions = async () => {
    const res = await axios.get(APIHOST + "/api/assessments/" + selected.id + '/submissions', {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    });
    console.log(res.data);
    setSubmissions(res.data)
  }

  useEffect(() => {
    fetchSybmissions()
  }, [])
  

  const handleUpdateScore = (index, newScore) => {
    // setStudentsInfo((prevStudentsInfo) => {
    //   const updatedStudents = [...prevStudentsInfo.students];
    //   updatedStudents[index].score = newScore;
    //   return { ...prevStudentsInfo, students: updatedStudents };
    // });
  };

  const handleScoreChange = (index, event) => {
    const newScore = parseInt(event.target.value);
    handleUpdateScore(index, newScore);
  };
  return (
    <div>
      {grade && (
        <div>
          <h2>Grade Assignment</h2>
          {/* {selected.id} */}
          <br />
          <br />
          <table>
            <thead>
              <tr>
                <th>MAVID</th>
                <th>File</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((student, index) => (
                <tr key={index}>
                  <td>{student.userid}</td>
                  <td>{student.file}</td>
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
