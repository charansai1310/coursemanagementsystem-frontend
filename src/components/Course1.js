import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";

function Course1({coursedata}) {
  console.log(coursedata)
  // const [courseObjectives, setCourseObjectives] = useState(
  //   coursedata.objectives || []
  // );
  // const [courseContent, setCourseContent] = useState(coursedata.content || {});

  return (
    <div>
      <div id="home">
        <p align="left">
          <b>
            <i>
              <h3>{coursedata.name}</h3>
            </i>
          </b>
          <br />
          <b>
            <i>
              <h3>Course Description: </h3>
            </i>
          </b>
          <br />
          {coursedata.description}
          <br />
        </p>
      </div>
      <div id="syllabus">
        {/* <Content content={coursedata.content} /> */}
        {/* <table>
          <tr>
            <td>Week 1-2: Introduction to Programming</td>
            <td>
              Introduction to programming concepts.
              <br />
              Overview of Link high-level programming language (e.g., Python).
              <br />
              Setting up the development environment.
              <br />
              Basic input and output.
              <br />
            </td>
          </tr>
          <tr>
            <td>
              Week 3-4: Variables and Data Types
              <br />
            </td>
            <td>
              Variables and constants
              <br />
              Data types: int, float, string
              <br />
              Type conversion and casting
              <br />
              Expressions and operators
              <br />
            </td>
          </tr>
          <tr>
            <td>
              Week 5-6: Control Structures
              <br />
            </td>
            <td>
              Conditional statements (if, else, elif)
              <br />
              Loops (while, for)
              <br />
              Nested loops and conditional statements
              <br />
              Debugging techniques
              <br />
            </td>
          </tr>
          <tr>
            <td>
              Week 7-8: Functions and Modules
              <br />
            </td>
            <td>
              Defining functions
              <br />
              Function parameters and return values
              <br />
              Scope and lifetime of variables
              <br />
              Using built-in and custom modules
              <br />
            </td>
          </tr>
          <tr>
            <td>
              Week 9-10: Lists and Arrays
              <br />
            </td>
            <td>
              Introduction to lists/arrays
              <br />
              List manipulation and operations
              <br />
              List comprehensions
              <br />
              Multidimensional arrays
              <br />
            </td>
          </tr>
          <tr>
            <td>
              Week 11-12: File Handling
              <br />
            </td>
            <td>
              Reading and writing text files
              <br />
              Error handling and exceptions
              <br />
              Working with CSV and JSON files
              <br />
              File input/output best practices
              <br />
            </td>
          </tr>
          <tr>
            <td>
              Week 13-14: Basic Algorithms
              <br />
            </td>
            <td>
              Introduction to algorithms
              <br />
              Searching and sorting algorithms
              <br />
              Time and space complexity analysis
              <br />
              Algorithm efficiency
              <br />
            </td>
          </tr>
          <tr>
            <td>
              Week 15: Final Project and Review
              <br />
            </td>
            <td>
              Final project presentation
              <br />
              Review of course material
              <br />
              Final exam
              <br />
            </td>
          </tr>
        </table> */}
      </div>
      <br />
      <div id="courseobjectives">
        <p align="left">
          <b>
            <i>Course Objectives:</i>
          </b>
          <br />
          <ul>
            <li>Understand fundamental programming concepts.</li>
            <li>Write and analyze algorithms.</li>
            <li>Create programs using Link high-level programming language.</li>
            <li>Debug and troubleshoot programming errors.</li>
            <li>Apply problem-solving skills to computational challenges.</li>
          </ul>
          {/* <ul>
            {Object.entries(courseObjectives).map((objective, index) => (
              <li key={index}>
                {index + 1}
                {"\t"}
                {objective.slice(1)}
              </li>
            ))}
          </ul> */}
        </p>
        {/* <p align="left">
          <br />
          <b>
            <i>Prerequisites: </i>
          </b>
          {coursedata.prerequisites}
        </p> */}
      </div>
      {/* <div id="facultyinfo">
        <p align="left">
          <b>
            <i>Instructor Name: </i> Prof. Eleanor Bennett
          </b>
          <br />
          <b>
            <i>Office Hours: </i> Monday/Wednesday : 10:00 AM TO 12:00 PM
          </b>
        </p>
      </div> */}
    </div>
  );
}

export default Course1;

const Content = ({ courseContent }) => {
  return (
    <table>
      <tbody>
        {courseContent.map((week, index) => {
          const weekTitle = Object.keys(week)[0];
          const topics = week[weekTitle];
          return (
            <tr key={index}>
              <td>{weekTitle}</td>
              <td>
                <ul>
                  {topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
