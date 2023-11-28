import "./Header.css";
import "./Footer.css";
import "./image.css";
import "./gridcontainer.css";
import "./formfeild.css";
import "./button.css";
import { useNavigate, Link } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <header className="header" id="headerid">
        <Link to="#headerid" class="logo">
          Maverick Brilliance
        </Link>
        <nav class="nav-items">
          <Link to="javascript:history.back()">Back</Link>
        </nav>
      </header>
      <div className="grid-container-profile">
        <div className="img-profile">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU" />
        </div>
        <div>
          <form className="container" style={{ fontSize: "x-large" }}>
            <label for="lastname">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="lname"
              required
            />

            <label for="firstname">
              <b>First Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="fname"
              required
            />

            <label for="contact">
              <b>Contact</b>
            </label>
            <input
              type="text"
              placeholder="Enter Contact Details"
              name="contact"
              required
            />

            <label for="biography">
              <b>Biography</b>
            </label>
            <input
              type="text"
              placeholder="Add Biography"
              name="biography"
              required
            />

            <label for="links">
              <b>Links</b>
            </label>
            <input type="text" placeholder="Add Links" name="links" required />
          </form>
        </div>
        <div>
          <button
            type="button"
            class="btn-profile"
            onClick={() => navigate("/Profile")}
          >
            Save Changes
          </button>
        </div>
      </div>
      <footer class="footer" id="footer">
        <div class="copy">
          &copy; Copyright by Team 10, 2023. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default EditProfile;
