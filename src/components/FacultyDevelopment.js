import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function FacultyDevelopment() {
  return (
    <div className="page-container">
      <header className="header" id="headerid">
        <Link to="#headerid" className="logo">
          Maverick Brilliance
        </Link>
        <nav className="nav-items">
          <Link to="javascript:history.back()">Back</Link>
        </nav>
      </header>
      <p style={{ fontSize: "x-large", fontWeight: "bold" }}>
        FACULTY DEVELOPMENT
      </p>
      <hr width="100%" />
      <div className="grid-container-student-admin">
        <div>
          <div style={{ fontSize: "x-large", marginLeft: "8%" }}>Programs</div>
          <div className="index-items">
            <ul>
              <li>
                <HashLink to="#ifdp">
                  Institutional Faculty Development Program
                </HashLink>
              </li>
              <li>
                <HashLink to="#dfdp">
                  Departmental Faculty Development Program
                </HashLink>
              </li>
              <li>
                <HashLink to="#pfdp">
                  Personalized Faculty Development Program
                </HashLink>
              </li>
              <li>
                <HashLink to="#lda">
                  Leadership Development Activity(LDA)
                </HashLink>
              </li>
              <li>
                <HashLink to="#mfdp">
                  Midcareer Faculty Development Program
                </HashLink>
              </li>
              <li>
                <HashLink to="#cfdp">
                  Community Faculty Development Program
                </HashLink>
              </li>
              <li>
                <HashLink to="#corefdp">
                  Core Faculty Development Program
                </HashLink>
              </li>
              <li>
                <HashLink to="#wig">Writing Interest Group(WIG)</HashLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div id="ifdp" style={{ textAlign: "left" }}>
            <p>
              <b>Institutional Faculty Development Program</b>
            </p>
            Enter Instructor Id and click on enroll or drop button <br />
            <br />
            <label for="idno">
              <b>Instructor ID</b>
            </label>
            <br />
            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="Enter Id Number"
              name="idno"
              required
            />
            {"\t"}
            <button type="submit">Enroll</button>
            {"\t"}
            <button type="submit">Drop</button>
            <br />
            <hr />
          </div>
          <div id="dfdp" style={{ textAlign: "left" }}>
            <p>
              <b>Departmental Faculty Development Program</b>
            </p>
            Enter Instructor Id and click on enroll or drop button <br />
            <br />
            <label for="idno">
              <b>Instructor ID</b>
            </label>
            <br />
            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="Enter Id Number"
              name="idno"
              required
            />
            {"\t"}
            <button type="submit">Enroll</button>
            {"\t"}
            <button type="submit">Drop</button>
            <br />
            <hr />
          </div>
          <div id="pfdp" style={{ textAlign: "left" }}>
            <p>
              <b>Departmental Faculty Development Program</b>
            </p>
            Enter Instructor Id and click on enroll or drop button <br />
            <br />
            <label for="idno">
              <b>Instructor ID</b>
            </label>
            <br />
            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="Enter Id Number"
              name="idno"
              required
            />
            {"\t"}
            <button type="submit">Enroll</button>
            {"\t"}
            <button type="submit">Drop</button>
            <br />
            <hr />
          </div>
          <div id="lda" style={{ textAlign: "left" }}>
            <p>
              <b>Leadership Development Activity(LDA)</b>
            </p>
            Enter Instructor Id and click on enroll or drop button <br />
            <br />
            <label for="idno">
              <b>Instructor ID</b>
            </label>
            <br />
            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="Enter Id Number"
              name="idno"
              required
            />
            {"\t"}
            <button type="submit">Enroll</button>
            {"\t"}
            <button type="submit">Drop</button>
            <br />
            <hr />
          </div>
          <div id="mfdp" style={{ textAlign: "left" }}>
            <p>
              <b>Midcareer Faculty Development Program</b>
            </p>
            Enter Instructor Id and click on enroll or drop button
            <br />
            <br />
            <label for="idno1">
              <b>Instructor ID</b>
            </label>
            <br />
            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="Enter Id Number"
              name="idno1"
              required
            />
            {"\t"}
            <button type="submit">Enroll</button>
            {"\t"}
            <button type="submit">Drop</button>
            <br />
            <hr />
          </div>
          <div id="cfdp" style={{ textAlign: "left" }}>
            <p>
              <b>Community Faculty Development Program</b>
            </p>
            Enter Instructor Id and click on enroll or drop button <br />
            <br />
            <label for="idno2">
              <b>Instructor ID</b>
            </label>
            <br />
            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="Enter Id Number"
              name="idno2"
              required
            />
            {"\t"}
            <button type="submit">Enroll</button>
            {"\t"}
            <button type="submit">Drop</button>
            <br />
            <hr />
          </div>
          <div id="corefdp" style={{ textAlign: "left" }}>
            <p>
              <b>Core Faculty Development Program</b>
            </p>
            Enter Instructor Id and click on enroll or drop button
            <br />
            <br />
            <label for="idno3">
              <b>Instructor ID</b>
            </label>
            <br />
            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="Enter Id Number"
              name="idno3"
              required
            />
            {"\t"}
            <button type="submit">Enroll</button>
            {"\t"}
            <button type="submit">Drop</button>
            <br />
            <hr />
          </div>
          <div id="wig" style={{ textAlign: "left" }}>
            <p>
              <b>Writing Interest Group(WIG)</b>
            </p>
            Enter Instructor Id and click on enroll or drop button <br />
            <br />
            <label for="idno4">
              <b>Instructor ID</b>
            </label>
            <br />
            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="Enter Id Number"
              name="idno4"
              required
            />
            {"\t"}
            <button type="submit">Enroll</button>
            {"\t"}
            <button type="submit">Drop</button>
            <br />
            <hr />
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
export default FacultyDevelopment;
