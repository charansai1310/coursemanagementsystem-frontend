// import ChatBot from "./ChatBot.js";
// import "./coursetile.css";
// import { Link, useNavigate } from "react-router-dom";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import CourseObjectivesAdmin from "./CourseObjectivesAdmin.js";
// function Admin() {
//   const navigate = useNavigate();
//   return (
//     <div className="page-container">
//       <header className="header" id="headerid">
//         <Link to="#headerid" className="logo">
//           Maverick Brilliance
//         </Link>
//         <nav class="nav-items">
//           <Link to="/Profile">Profile</Link>
//           <Link to="/studentAdmin">Students</Link>
//           <Link to="/InstructorAdmin">Instructor</Link>
//           <Link to="/CoordinatorAdmin">Coordinator</Link>
//           <Link to="/QaOfficerAdmin">QA Officer</Link>
//           <Link to="/">Sign Out</Link>
//         </nav>
//       </header>
//       <div className="grid-container-admin">
//         <div>
//           <div className="coursetile">
//             <header>
//               <div className="name">Students</div>
//             </header>
//             <button
//               type="button"
//               className="btn-admin"
//               onClick={() => navigate("/studentAdmin#managestudent")}
//             >
//               Manage Students
//             </button>
//             <button
//               type="button"
//               className="btn-admin"
//               onClick={() => navigate("/studentAdmin#manageanalytics")}
//             >
//               Manage Courses
//             </button>
//             <br />
//             {/* <button
//               type="button"
//               className="btn-admin"
//               onClick={() => navigate("/studentAdmin#manageanalytics")}
//             >
//               Manage Permissions
//             </button> */}
//             <button
//               type="button"
//               className="btn-admin"
//               onClick={() => navigate("/studentAdmin#manageanalytics")}
//             >
//               Reports and Analytics
//             </button>
//             {/* <button
//               type="button"
//               className="btn-admin"
//               onClick={() => navigate("/studentAdmin#manageanalytics")}
//             >
//               Analytics
//             </button> */}
//             <br />
//           </div>
//         </div>
//         <div>
//           <div className="coursetile">
//             <header>
//               <div className="name">Instructor</div>
//             </header>
//             <button
//               type="button"
//               className="btn-admin"
//               onClick={() => navigate("/InstructorAdmin")}
//             >
//               Manage Instructors
//             </button>
//             <br />
//             <button
//               type="button"
//               className="btn-admin"
//               onClick={() => navigate("/InstructorAdmin")}
//             >
//               Manage Courses
//             </button>
//             <br />
            
            
//             <button
//               type="button"
//               className="btn-admin"
//               onClick={() => navigate("/InstructorAdmin")}
//             >
//               Reviews
//             </button>
//             <br />
//           </div>
//         </div>
//         <div>
//           <div className="coursetile">
//             <header>
//               <div className="name">Coordinator</div>
//             </header>
//             <button
//               type="button"
//               className="btn-admin"
//               onClick={() => navigate("/CoordinatorAdmin#manageanalytics")}
//             >
//               Manage Coordinators
//             </button>
//             <br />
//             <button
//               type="button"
//               className="btn-admin"
//               onClick={() => navigate("/CoordinatorAdmin#manageanalytics")}
//             >
//               Manage Courses
//             </button>
//             <br />
            
//             <button
//               type="button"
//               className="btn-admin"
//               onClick={() => navigate("/CoordinatorAdmin#manageanalytics")}
//             >
//               Reports
//             </button>
//             <br />
//             <button
//               type="button"
//               className="btn-admin"
//               onClick={() => navigate("/CoordinatorAdmin#manageanalytics")}
//             >
//               Reviews
//             </button>
//             <br />
//           </div>
//         </div>
//         <div>
//           <div className="coursetile1">
//             <header>
//               <div className="name">QA Officer</div>
//             </header>
//             <button
//               type="button"
//               className="btn-admin"
//               onClick={() => navigate("/QaOfficerAdmin#manageanalytics")}
//             >
//               Manage Officers
//             </button>
//             <br />
//             <button
//               type="button"
//               className="btn-admin"
//               onClick={() => navigate("/QaOfficerAdmin#manageanalytics")}
//             >
//               Course Performance
//             </button>
//             <br />
//             <button
//               type="button"
//               className="btn-admin"
//               onClick={() => navigate("/QaOfficerAdmin#manageanalytics")}
//             >
//               Feedback
//             </button>
//             <br />
//           </div>
//           <div className="coursetile2">
//             <header>
//               <div className="name">Course</div>
//             </header>
//             <button
//               type="button"
//               className="btn-admin"
//               onClick={() => navigate("/CourseObjectivesAdmin")}
//             >
//               Course Objectives
//             </button>
//             <br />
//           </div>
//           <div>
//             <button class="chatbot-toggler">
//               <span class="material-symbols-outlined">mode_comment</span>
//               <span class="material-symbols-outlined">close</span>
//             </button>
//             <div class="chatbot">
//               <header>
//                 <h2>Chatbot</h2>
//               </header>
//               <ul class="chatbox">
//                 <li class="chat incoming">
//                   <span class="material-symbols-outlined">smart_toy</span>
//                   <p>
//                     Hi there 👋. <br /> How Can I help You Today?
//                   </p>
//                 </li>
//               </ul>
//               <div class="chat-input">
//                 <textarea placeholder="Enter a Message...." required></textarea>
//                 <span id="send-btn" class="material-symbols-outlined">
//                   send
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <footer className="footer" id="footer">
//         <div className="copy">
//           &copy; Copyright by Team 10, 2023. All Rights Reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Admin;
import ChatBot from "./ChatBot.js";
import "./coursetile.css";
import { Link, useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CourseObjectivesAdmin from "./CourseObjectivesAdmin.js";
function Admin() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <header className="header" id="headerid">
        <Link to="#headerid" className="logo">
          Maverick Brilliance
        </Link>
        <nav class="nav-items">
          <Link to="/Profile">Profile</Link>
          <Link to="/studentAdmin">Students</Link>
          <Link to="/InstructorAdmin">Instructor</Link>
          <Link to="/CoordinatorAdmin">Coordinator</Link>
          <Link to="/QaOfficerAdmin">QA Officer</Link>
          <Link to="/">Sign Out</Link>
        </nav>
      </header>
      <div className="grid-container-admin">
        <div>
          <div className="coursetile">
            <header>
              <div className="name">Students</div>
            </header>
            <button
              type="button"
              className="btn-admin"
              onClick={() => navigate("/studentAdmin#managestudent")}
            >
              Manage Students
            </button>
            <br />
            <button
              type="button"
              className="btn-admin"
              onClick={() => navigate("/studentAdmin#managereports")}
            >
              Reports And Analytics
            </button>
            <br />
          </div>
        </div>
        <div>
          <div className="coursetile">
            <header>
              <div className="name">Instructor</div>
            </header>
            <button
              type="button"
              className="btn-admin"
              onClick={() => navigate("/InstructorAdmin")}
            >
              Manage Instructors
            </button>
            <br />
            <button
              type="button"
              className="btn-admin"
              onClick={() => navigate("/InstructorAdmin")}
            >
              Reports And Analytics
            </button>
            <br />
            <button
              type="button"
              className="btn-admin"
              onClick={() => navigate("/InstructorAdmin")}
            >
              Reviews
            </button>
            <br />
          </div>
        </div>
        <div>
          <div className="coursetile">
            <header>
              <div className="name">Coordinator</div>
            </header>
            <button
              type="button"
              className="btn-admin"
              onClick={() => navigate("/CoordinatorAdmin#manageanalytics")}
            >
              Manage Coordinators
            </button>
            <br />
            <button
              type="button"
              className="btn-admin"
              onClick={() => navigate("/CoordinatorAdmin#manageanalytics")}
            >
              Reports
            </button>
            <br />
            <button
              type="button"
              className="btn-admin"
              onClick={() => navigate("/CoordinatorAdmin#manageanalytics")}
            >
              Reviews
            </button>
            <br />
          </div>
        </div>
        <div>
          <div className="coursetile1">
            <header>
              <div className="name">QA Officer</div>
            </header>
            <button
              type="button"
              className="btn-admin"
              onClick={() => navigate("/QaOfficerAdmin#manageanalytics")}
            >
              Manage Officers
            </button>
            <br />
            <button
              type="button"
              className="btn-admin"
              onClick={() => navigate("/QaOfficerAdmin#manageanalytics")}
            >
              Course Performance
            </button>
            <br />
            <button
              type="button"
              className="btn-admin"
              onClick={() => navigate("/QaOfficerAdmin#manageanalytics")}
            >
              Feedback
            </button>
            <br />
          </div>
          <div className="coursetile2">
            <header>
              <div className="name">Course</div>
            </header>
            <button
              type="button"
              className="btn-admin"
              onClick={() => navigate("/CourseObjectivesAdmin")}
            >
              Course Objectives
            </button>
            <br />
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
      </div>
      <footer className="footer" id="footer">
        <div className="copy">
          &copy; Copyright by Team 10, 2023. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Admin;
