// import Header from "./Header.js";
// import Footer from "./Footer.js";
// import React, { useState } from "react";
// import { Route, BrowserRouter as Router, Switch, Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// import "./heading.css";
// import "./paragraph.css";
// import "./gridcontainer.css";
// import "./button.css";
// import "./image.css";
// import "./formfeild.css";
// import { APIHOST } from "../env.js";
// import { useForm } from "react-hook-form";
// function SignUp() {
//   const initialState = { 
//     mavid: '', 
//     firstname: '', 
//     lastname: '', 
//     email: '', 
//     phone: '', 
//     password: '', 
//     role: 'student',
//     address: '',
//     dob:'04/14/1995',
//    };
//   const [registrationInfo, setRegistrationInfo] = useState(initialState);
//   const navigate = useNavigate();

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setRegistrationInfo({ ...registrationInfo, [name]: value })
//   }

//   function handleSubmit(e){
//     e.preventDefault();
//     console.log(registrationInfo)
//     onSubmit()
//   }

//   async function onSubmit(data) {
//     const url = APIHOST + '/api/register'
//     const headers = {
//       'content-type': 'application/json'
//   }
//     const res = await axios.post(url, data, {headers: headers})
//     console.log(res.data)
//     switch (registrationInfo.role) {
//       case 'student':
//         navigate("/Student")
//         break;
//       case 'instructor':
//         navigate("/Instructor")
//         break;
//       default:
//         break;
//     }

//     const { register, handleSubmit, setValue } = useForm({
//       defaultValues: {
//         mavid: '', 
//         firstname: '', 
//         lastname: '', 
//         email: '', 
//         phone: '', 
//         password: '', 
//         role: 'student',
//         address: '',
//         dob:'04/14/1995',
//       },
//     })
    
//   }
//   return (
//     <div className="page-container">
//       <Header />
//       <div className="grid-container-forgotpassword">
//         <div>
//           <img
//             className="img-signup"
//             style={{ marginTop: "30%", height: "50%", width: "75%" }}
//             src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSol3WnWppNI_6vqGJAHEBHYaXiH7waMhI3fumWpam5iVPQzcMD"
//             alt="alt"
//           />
//         </div>
//         <div className="info" id="info">
//           <form onSubmit={handleSubmit(onSubmit)} className="container" method="post" name="signupform">
//             <h1 align="center">Sign Up</h1>

//             <label for="firstname">
//               <b>First Name</b>
//             </label>
//             <input type="text" placeholder="Enter Name" name="firstname" value={registrationInfo.firstName} onChange={handleChange} required />

//             <label for="lastname">
//               <b>Last Name</b>
//             </label>
//             <input type="text" placeholder="Enter Name" name="lastname" value={registrationInfo.lastName} onChange={handleChange} required />

//             <label for="mavid">
//               <b>ID Number</b>
//             </label>
//             <input type="text" placeholder="ID" name="mavid" value={registrationInfo.mavid} onChange={handleChange} required />

//             <label for="email">
//               <b>Email</b>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter email"
//               name="email"
//               value={registrationInfo.email}
//               onChange={handleChange}
//               required
//             />

//             <label for="phone">
//               <b>Phone</b>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Contact Number"
//               name="phone"
//               value={registrationInfo.phone}
//               onChange={handleChange}
//               required
//             />

//             <label for="address">
//               <b>Address</b>
//             </label>
//             <input
//               type="text"
//               placeholder="Address"
//               name="address"
//               value={registrationInfo.address}
//               onChange={handleChange}
//               required
//             />

//             <label for="password">
//               <b>Password</b>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               name="password"
//               value={registrationInfo.password}
//               onChange={handleChange}
//               required
//             />

//             <label for="usertype">
//               <b>User Type</b>
//             </label>
//             <div>
//               <select value={registrationInfo.role} onChange={handleChange} name="role">
//                 <option value="student">Student</option>
//                 <option value="instructor">Instructor</option>
//                 <option value="qaofficer">Qaofficer</option>
//               </select>
//             </div>
//             <br/>

//             <button
//               type="submit"
//               onclick="window.alert('User Registered')"
//               className="btn-signup"
//             >
//               Sign Up
//             </button>
//             <br />
//             <br />
//             <h3 align="center">
//               Already Have An Account? Login to Your Account
//             </h3>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default SignUp;



import Header from "./Header.js";
import Footer from "./Footer.js";
import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
  useNavigate,
} from "react-router-dom";
import axios from "axios";

import "./heading.css";
import "./paragraph.css";
import "./gridcontainer.css";
import "./button.css";
import "./image.css";
import "./formfeild.css";
import { APIHOST } from "../env.js";
function SignUp() {
  const initialState = {
    mavid: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    role: "student",
    address: "",
    dob: "04/14/1995",
  };
  const [registrationInfo, setRegistrationInfo] = useState(initialState);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setRegistrationInfo({ ...registrationInfo, [name]: value });
  }

  async function onSubmit(e) {
    e.preventDefault();

    // Reset previous error message
    setError("");

    // Validation checks
    if (
      !registrationInfo.firstname ||
      !registrationInfo.lastname ||
      !registrationInfo.mavid ||
      !registrationInfo.email ||
      !registrationInfo.phone ||
      !registrationInfo.password ||
      !registrationInfo.address
    ) {
      setError("All fields are required");
      return;
    }

    if (registrationInfo.phone.length !== 10) {
      setError("Phone number should be 10 digits");
      return;
    }

    if (registrationInfo.mavid.length !== 4) {
      setError("Mav Id number should be 4 digits");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(registrationInfo.email)) {
      setError("Invalid email format");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    if (!passwordRegex.test(registrationInfo.password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one special character, and one number."
      );
      return;
    }

    try {
      const url = APIHOST + "/api/register";
      const headers = {
        "content-type": "application/json",
      };

      const res = await axios.post(url, registrationInfo, { headers: headers });
      console.log(res.data);

      switch (registrationInfo.role) {
        case "student":
          navigate("/Student");
          break;
        case "instructor":
          navigate("/Instructor");
          break;
        case "admin":
          navigate("/Admin");
          break;
        case "coordinator":
          navigate("/Coordinator");
          break;
        case "qaofficer":
          navigate("/Qaofficer");
          break;
        // Add cases for other roles as needed
        default:
          break;
      }
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle error, show error message, or redirect to an error page
    }
  }

  return (
    <div className="page-container">
      <Header />
      <div className="grid-container-forgotpassword">
        <div>
          <img
            className="img-signup"
            style={{ marginTop: "30%", height: "50%", width: "75%" }}
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSol3WnWppNI_6vqGJAHEBHYaXiH7waMhI3fumWpam5iVPQzcMD"
            alt="alt"
          />
        </div>
        <div className="info" id="info">
          <form
            className="container"
            method="post"
            name="signupform"
            onSubmit={onSubmit}
          >
            <h2 align="center">
              <b>Sign Up</b>
            </h2>

            <label for="firstname">
              <b>First Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="firstname"
              value={registrationInfo.firstName}
              onChange={handleChange}
            />

            <label for="lastname">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="lastname"
              value={registrationInfo.lastName}
              onChange={handleChange}
            />

            <label for="mavid">
              <b>ID Number</b>
            </label>
            <input
              type="text"
              placeholder="ID"
              name="mavid"
              value={registrationInfo.mavid}
              onChange={handleChange}
            />

            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              value={registrationInfo.email}
              onChange={handleChange}
            />

            <label for="phone">
              <b>Phone</b>
            </label>
            <input
              type="text"
              placeholder="Enter Contact Number"
              name="phone"
              value={registrationInfo.phone}
              onChange={handleChange}
            />

            <label for="address">
              <b>Address</b>
            </label>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={registrationInfo.address}
              onChange={handleChange}
            />

            <label for="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={registrationInfo.password}
              onChange={handleChange}
            />

            <label for="usertype">
              <b>User Type</b>
            </label>
            <div>
              <select
                value={registrationInfo.role}
                onChange={handleChange}
                name="role"
              >
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
                <option value="admin">Admin</option>
                <option value="coordinator">Co-Ordinator</option>
                <option value="qaofficer">Qaofficer</option>
              </select>
            </div>
            <br />

            <button
              type="submit"
              onclick="window.alert('User Registered')"
              className="btn-signup"
            >
              Sign Up
            </button>
            <br />
            <br />
            {error && (
              <p
                style={{
                  color: "Red",
                  fontSize: "medium",
                  marginLeft: "25%",
                  marginTop: "0.5%",
                }}
              >
                {error}
              </p>
            )}
            <h3 align="center">
              Already Have An Account? Login to Your Account
            </h3>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;

