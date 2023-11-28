import "./Header.css";
import "./Footer.css";
import "./image.css";
import "./gridcontainer.css";
import "./formfeild.css";
import "./button.css";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";


function Profile() {

  const [authState, setAuthState] = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const handleInputChange = (field, value) => {
    setUserInfo({ ...userInfo, [field]: value });
  };
  const [componentVisibility, setComponentVisibility] = useState(false);
  const handleEdit = () => {
    setComponentVisibility(true);
    setIsEditing(true);
  };

  const handleSave = () => {
    setComponentVisibility(false);
    setIsEditing(false);
  };
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <header className="header" id="headerid">
        <a href="#headerid" class="logo">
          Maverick Brilliance
        </a>
        <nav className="nav-items">
          <Link to="javascript:history.back()">Back</Link>
        </nav>
      </header>
      <div>
        <div className="grid-container-profile">
          <div>
            <img
              className="img-profile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"
            />
          </div>
          <div>
            {componentVisibility ? (
              <div>
                <table>
                  <tbody>
                    {Object.entries(userInfo).map(([field, value]) => (
                      <tr key={field}>
                        <td>{field}</td>
                        <td>
                          {isEditing ? (
                            <input
                              type="text"
                              value={value}
                              onChange={(e) =>
                                handleInputChange(field, e.target.value)
                              }
                            />
                          ) : (
                            value
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <br />
                <br />
                <button className="btn-edit" onClick={handleSave}>
                  Save
                </button>
              </div>
            ) : (
              <form className="container" style={{ fontSize: "x-large" }}>
                <label for="mavid">
                  <b>Mav Id</b>
                </label>
                <p>{authState.userData.mavid}</p>

                <label for="lastname">
                  <b>Last Name</b>
                </label>
                <p>{authState.userData.lastname}</p>

                <label for="firstname">
                  <b>First Name</b>
                </label>
                <p>{authState.userData.firstname}</p>

                <label for="contact">
                  <b>Contact</b>
                </label>
                <p>{authState.userData.phone}</p>

                <label for="email">
                  <b>Email</b>
                </label>
                <p>{authState.userData.email}</p>

              </form>
            )}
          </div>
          {/* <div>
            {!isEditing ? (
              <button className="btn-edit" onClick={handleEdit}>
                Edit
              </button>
            ) : null}
          </div> */}
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

export default Profile;
