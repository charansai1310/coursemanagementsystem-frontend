import "./ForgotPassword.js";
import React, {useContext, useState} from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "./heading.css";
import "./paragraph.css";
import "./gridcontainer.css";
import "./button.css";
import "./image.css";
import "./formfeild.css";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.js";
import { APIHOST } from "../env.js";


function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({email:'',password:''});
  const [authState, setAuthState] = useContext(AuthContext)


  function handleChange(event) {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value })
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(credentials)
    onSignin()
  }

  async function onSignin() {
    
    const url = APIHOST + '/api/login'
    const headers = {
      'content-type': 'application/json'
    }

    try {
      const res = await axios.post(url, credentials, {headers: headers})
    console.log(res.data)
    setAuthState({...authState, 
      isLoggedIn: true,
      token: res.data['access_token'],
      userData: res.data['user']
    })

    localStorage.setItem('token', res.data['access_token'])
    switch(res.data['user'].role){
      case 'student':
        navigate("/StudentPage")
        break;
      case 'instructor':
        navigate("/Instructor")
        break;
      case 'admin':
        navigate("/Admin")
        break;
      case 'coordinator':
        navigate("/Coordinator")
        break;
      case 'qaofficer':
        navigate("/Qaofficer")
        break;
      
    }
    } catch (error) {
      console.log(error)
    }
  }

  

  return (
    <div className="page-container">
      <Header />
      <div>
        <div className="grid-container-login">
          <div>
            <img
              className="img-login"
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRoIWR4eEZEeNTC4z1PhTpx7XRTDUwH3SjsHMsU8PGFH-Rlp2oa"
            />
          </div>
          <div className="info" id="info">
            <form className="container" name="loginform" onSubmit={handleSubmit}>
              <h1 className="h-homepage" align="center">
                Login
              </h1>

              <label for="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                value={credentials.email}
                onChange={handleChange}
                required
              />

              <label for="password">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                id="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />

              <button
                style={{ width: "100%" }}
                type="submit"
                className="btn-login"
                id="loginbtn"
              >
                Login
              </button>
              <p id="login-message"></p>
            </form>
            <br />
            <h3 style={{ textAlign: "center", marginLeft: "32%" }}>
              New User? Register Your Account
            </h3>
            <div style={{ textAlign: "center", marginLeft: "32%" }}>
              <Link to="/ForgotPassword">Forgot Password ?</Link>
            </div>
            {/* <div align="center">
              <Link to="/StudentPage">Student</Link>
              <br />
              <Link to="/Instructor">Instructor</Link>
              <br />
              <Link to="/Admin">Admin</Link>
              <br />
              <Link to="/Coordinator">Co-Ordinator</Link>
              <br />
              <Link to="/Qaofficer">QA Officer</Link>
              <br />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
