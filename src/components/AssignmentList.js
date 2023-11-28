
import React, { useContext, useEffect, useState } from "react";
import Submission from "./Submission.js";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext.js";
import { APIHOST } from "../env.js";

function AssignmentList({coursedata}) {
  const [submission, setSubmission] = useState(false);
  const [assign, setAssign] = useState(true);
  const [assignments, setAssignments] = useState([]);
  const [authState, setAuthState] = useContext(AuthContext);
  const [selected, setSelected] = useState();

  const toggleAssignment = (data) => {
    setSelected(data)
    setAssign(!assign)
    setSubmission(!submission)
  }


  const fetchAssignments = async () => {
    const res = await axios.get(APIHOST + "/api/courses/" + coursedata.id + "/assessments/assignment", {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    });
    console.log(res.data);
    setAssignments(res.data)
  }

  useEffect(() => {
    fetchAssignments()
  }, [])

  
  return (
    <div className="page-container">
      <hr width="100%" />
      <div>
        <div class="assignment">
          <p>Assignments</p>
        </div>
        <div>
          {assign && (
            <table id="assignmentTable">
              <thead>
                <tr>
                  <th>Assignment Name</th>
                  <th>Due</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((assignment, index) => (
                  <tr key={index}>
                    <td>
                      <button
                        onClick={() => toggleAssignment(assignment)}
                      >
                        {assignment.name}
                      </button>
                    </td>
                    <td>Due date</td>
                    <td>{assignment.maxscore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <br />
          <br />

          {submission && (
              <Submission
              data={selected}
              submission={submission}
              onHide={toggleAssignment}
            />
            
            
          )}
        </div>
      </div>
      <script>
        var element = document.getElementById('assignmentTable');
        element.style.width = '300px';
      </script>
      <footer className="footer" id="footer">
        <div className="copy">
          &copy; Copyright by Team 10, 2023. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default AssignmentList;
