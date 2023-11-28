import "./Header.css";
import { Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="header" id="headerid">
      <Link to="#headerid" className="logo">
        Maverick Brilliance
      </Link>
      <nav className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/AcademicPrograms">Academic Program</Link>
        <Link to="/Courses">Courses</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="https://blog.axk5640.uta.cloud/" target="_blank">
          Blog
        </Link>
        <Link to="/ContactUs">Contact Us</Link>
        <Link to="/Login">Login</Link>
        <Link to="/SignUp">SignUp</Link>
      </nav>
    </div>
  );
}

export default Header;
