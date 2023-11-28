import React from "react";
import Home from "./components/Home.js";
import AcademicPrograms from "./components/AcademicPrograms.js";
import Courses from "./components/Courses.js";
import AboutUs from "./components/AboutUs.js";
import ContactUs from "./components/ContactUs.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import ForgotPassword from "./components/ForgotPassword.js";
import StudentPage from "./components/StudentPage.js";
import Profile from "./components/Profile.js";
import Instructor from "./components/Instructor";
import Admin from "./components/Admin";
import Coordinator from "./components/Coordinator";
import Qaofficer from "./components/Qaofficer";
import { Route, Routes } from "react-router-dom";
import EditProfile from "./components/EditProfile";
import CourseStudent from "./components/CourseStudent.js";
import { ParamProvider } from "./components/ParamContext.js";
import StudentAdmin from "./components/StudentAdmin.js";
import InstructorAdmin from "./components/InstructorAdmin";
import CoordinatorAdmin from "./components/CoordinatorAdmin";
import CourseObjectivesAdmin from "./components/CourseObjectivesAdmin.js";
import QaOfficerAdmin from "./components/QaOfficerAdmin";
import ManageCourses from "./components/ManageCourses";
import Reports from "./components/Reports";
import Analytics from "./components/Analytics";
import ImprovementInitiatives from "./components/ImprovementInitiatives";
import ManageCourseContent from "./components/ManageCourseContent";
import SupportAndFeedback from "./components/SupportAndFeedback";
import CurriculumEvalution from "./components/CurriculumEvalution";
import FacultyDevelopment from "./components/FacultyDevelopment";
import Report from "./components/Report";
import Reviews from "./components/Reviews";
import CourseInstructor from "./components/CourseInstructor.js";
import Availability from "./components/Availability";
import AssignmentList from "./components/AssignmentList.js";
import Assignments1 from "./components/Assignments1";
import Quizzes1 from "./components/Quizzes1";
import Grades from "./components/Grades";
import Quizzes from "./components/Quizzes";
import ReportsS from "./components/ReportsS";
import Discussions from "./components/Discussions";
import Resources from "./components/Resources";
import ManageCoursesInstructor from "./components/ManageCoursesInstructor.js";
import { ProtectedRoute } from "./components/ProtectedRoute.js";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/AcademicPrograms" element={<AcademicPrograms />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/ManageCourses" element={<ManageCourses />} />
        <Route path="/Availability" element={<Availability />} />
        <Route path="/Assignments1" element={<Assignments1 />} />
        <Route path="/Grades" element={<Grades />} />
        <Route path="/Quizzes" element={<Quizzes />} />
        <Route path="/Quizzes1" element={<Quizzes1 />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/ReportsS" element={<ReportsS />} />
        <Route path="/Discussions" element={<Discussions />} />
        <Route
          path="/ManageCoursesInstructor"
          element={<ManageCoursesInstructor />}
        />
      </Routes>
      <ParamProvider>
        {/* <Routes>
          <Route exact path="/StudentPage" element={<ProtectedRoute><StudentPage /></ProtectedRoute>} />
          <Route path="/Course/:id" element={<Course />} />
        </Routes> */}
        <Routes>
          <Route exact path="/StudentPage" element={<ProtectedRoute><StudentPage /></ProtectedRoute>} />
          <Route path="/CourseStudent/:id" element={<ProtectedRoute><CourseStudent /></ProtectedRoute>} />
          <Route path="/Assignment/:id" element={<ProtectedRoute><AssignmentList /></ProtectedRoute>} />
        </Routes>
        <Routes>
          <Route exact path="/Instructor" element={<ProtectedRoute><Instructor /></ProtectedRoute>} />
          <Route path="/CourseInstructor/:id" element={<CourseInstructor />} />
        </Routes>
      </ParamProvider>
      <Routes>
        <Route exact path="/Admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route exact path="/StudentAdmin" element={<StudentAdmin />} />
        <Route exact path="/InstructorAdmin" element={<InstructorAdmin />} />
        <Route
          exact
          path="/CourseObjectivesAdmin"
          element={<CourseObjectivesAdmin />}
        />
        <Route exact path="/CoordinatorAdmin" element={<CoordinatorAdmin />} />
        <Route exact path="/QaOfficerAdmin" element={<QaOfficerAdmin />} />
      </Routes>
      <Routes>
        <Route exact path="/Coordinator" element={<Coordinator />} />
        <Route exact path="/Analytics" element={<Analytics />} />
        <Route exact path="/Reports" element={<Reports />} />
        <Route
          exact
          path="/SupportAndFeedback"
          element={<SupportAndFeedback />}
        />
        <Route
          exact
          path="/ImprovementInitiatives"
          element={<ImprovementInitiatives />}
        />
        <Route
          exact
          path="/ManageCourseContent"
          element={<ManageCourseContent />}
        />
      </Routes>
      <Routes>
        <Route exact path="/Qaofficer" element={<ProtectedRoute><Qaofficer /></ProtectedRoute>} />
        <Route exact path="/Report" element={<Report />} />
        <Route exact path="/Reviews" element={<Reviews />} />
        <Route
          exact
          path="/CurriculumEvalution"
          element={<CurriculumEvalution />}
        />
        <Route
          exact
          path="FacultyDevelopment"
          element={<FacultyDevelopment />}
        />
      </Routes>
    </div>
  );
}
