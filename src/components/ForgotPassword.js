import Header from "./Header.js";
import Footer from "./Footer.js";
import "./heading.css";
import "./paragraph.css";
import "./gridcontainer.css";
import "./button.css";
import "./image.css";
import axios from "axios";
import { APIHOST } from "../env.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {

  const [email, setEmail] =  useState("")
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async() => {
    const res = await axios.post(APIHOST + "/api/forgot-password", {email: email})
    navigate('/login')
  }

  return (
    <div className="page-container">
      <Header />
      <div className="grid-container-forgotpassword">
        <div>
          <img
            className="img-forgotpassword"
            src="https://ngopulse.net/themes/jobcy/images/auth/reset-password.png"
          />
        </div>
        <div>
          <h1 style={{ marginTop: "10%", marginLeft: "25%" }}>
            Forgot Password ?
          </h1>
          <br />
          <p style={{ marginLeft: "25%" }}>
            No biggie. We have your back. Please enter your Email Address and
            Student Id below and click on "Send Reset Link". We will send you a
            "Password Reset" link to your mail id.
          </p>
          <br />
          <br />
          <br />
          <div className="container">
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn-login" onClick={handleSubmit}>
              Send Reset Link
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default ForgotPassword;
