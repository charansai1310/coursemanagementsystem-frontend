import Header from "./Header.js";
import Footer from "./Footer.js";
import "./heading.css";
import "./paragraph.css";
import "./image.css";
import "./gridcontainer.css";

function Home() {
  return (
    <div className="page-container">
      <Header />
      <div style={{ backgroundColor: "white" }}>
        <div>
          <br />
          <br />
          <br />
          <div className="grid-container-homepage-1">
            <img
              className="img-homepage"
              src="https://glebbahmutov.com/blog/images/london/work.png"
            />
            <div>
              <div className="p-homepage" align="center">
                <br />
                <br />
                <br />
                <br />
                <div className="h-homepage">
                  <b>
                    <i>
                      Welcome to the Master of Science in Computer Science
                      Program!
                    </i>
                  </b>
                </div>
                <br />
                <br />
              </div>
              <div>
                <b>
                  <i>
                    <p className="p-homepage" align="center">
                      At Maverick Brilliance, we take pride in offering a
                      cutting-edge and comprehensive Master of Science in
                      Computer Science (MSCS) program designed to empower the
                      next generation of computer scientists and engineers. Our
                      program is tailored to provide students with a deep and
                      well-rounded understanding of computer science concepts,
                      practical skills, and the latest technological
                      advancements that drive innovation in the digital age.
                    </p>
                  </i>
                </b>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
        </div>
        <div>
          <br />
          <br />
          <br />
          <div className="grid-container-homepage-2">
            <div>
              <div className="p-homepage">
                <br />
                <br />
                <br />
                <br />
                <div className="h-homepage">
                  <b>
                    <i>Our Mission:</i>
                  </b>
                </div>
                <br />
                <br />
              </div>
              <div>
                <b>
                  <i>
                    <p className="p-homepage" align="center">
                      Our mission is to foster a community of passionate
                      learners, critical thinkers, and problem solvers who are
                      equipped to tackle the challenges of the modern tech
                      landscape. We are dedicated to providing a rigorous
                      academic curriculum, encouraging research and
                      collaboration, and promoting ethical and responsible
                      computing practices.
                    </p>
                  </i>
                </b>
              </div>
            </div>
            <img
              className="img-homepage"
              src="https://st4.depositphotos.com/37898206/39132/i/450/depositphotos_391325424-stock-photo-our-mission-text-yellow-paper.jpg"
            />
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
