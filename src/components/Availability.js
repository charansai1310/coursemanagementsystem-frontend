import { Link } from "react-router-dom";
function Availability() {
  const course = {
    coursecode: "MB-CSE-0001",
    coursename: "Introduction to Programming",
    professor: "Prof. Elanor Bennett",
    availability: [
      {
        openseats: 60,
        waitlist: 20,
        time: "11:00 AM to 12:40 PM",
        days: "Monday and Thursday",
      },
    ],
  };
  return (
    <div>
      <header className="header" id="headerid">
        <Link href="#headerid" className="logo">
          Maverick Brilliance
        </Link>
        <nav className="nav-items">
          <Link to="javascript:history.back()">Back</Link>
        </nav>
      </header>
      <p style={{ fontSize: "x-large", textAlign: "left", fontWeight: "bold" }}>
        <br />
        COURSE AVAILABILITY
      </p>
      <br />
      <hr width="100%" />
      <div className="grid-container-availability">
        <div>
          <div className="index-items"></div>
        </div>
        <div>
          <div id="courseobjectives">
            <p
              style={{
                fontSize: "x-large",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              {course.coursecode}
              <br />
              {course.coursename}
              <br />
              {course.professor}
              <br />
            </p>
            <table className="tablecss">
              <tr>
                <th>Open Seats</th>
                <th>Wait List</th>
                <th>Days</th>
                <th>Time</th>
              </tr>
              {course.availability.map((availability, index) => (
                <tr key={index}>
                  <td>{availability.openseats}</td>
                  <td>{availability.waitlist}</td>
                  <td>{availability.days}</td>
                  <td>{availability.time}</td>
                </tr>
              ))}
            </table>
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

export default Availability;
