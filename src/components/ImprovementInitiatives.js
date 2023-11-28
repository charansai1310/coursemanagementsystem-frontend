import { HashLink } from "react-router-hash-link";
function ImprovementInitiatives() {
  return (
    <div className="page-container">
      <header class="header" id="headerid">
        <a href="#headerid" class="logo">
          Maverick Brilliance
        </a>
        <nav class="nav-items">
          <a href="javascript:history.back()">Back</a>
        </nav>
      </header>
      <p style={{ fontSize: "x-large", fontWeight: "bold" }}>
        IMPROVEMENT INITIATIVES
      </p>
      <hr width="100%" />
      <div class="grid-container-student-admin">
        <div>
          <div class="index-items">
            <ul>
              <li>
                <HashLink to="#improvementinitiatives">
                  Improvement Initiatives
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div id="improvementinitiatives" style={{ textAlign: "left" }}>
            <p>Improvement Initiatives</p>
            Enter Improvement Initiatives and Suggestions to be submitted to
            Management
            <br />
            <br />
            <textarea
              rows="20"
              cols="100"
              placeholder="Enter Improvement Initiatives and Suggestions"
              name="ii"
              required
            ></textarea>
            <br />
            <br />
            <button type="submit" className="btn-edit">
              Submit
            </button>
            <p>Suggestions will be submitted to the management</p>
            <hr />
          </div>
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

export default ImprovementInitiatives;
