import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faAward,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";
import Footer from "./header and footer/Footer";
import logo from "./images/logo.jpg";
import c1 from "./images/c1.jpg";
import c2 from "./images/html.png";
import c3 from "./images/sql.jpg";
import c4 from "./images/python.jpg";
import c5 from "./images/java.png";
import c6 from "./images/css.png";
import "./css/style.css";

function Home() {
  const navigate = useNavigate();
  const authToken = localStorage.getItem("token");

  return (
    <div style={{ fontFamily: '"Poppins", sans-serif' }}>
      <Navbar page={"home"} />
      <div>
        {/* Home Section */}
        <section id="home">
          <h2>
            Discover New Horizons <br /> with <span className="highlight">EduVerse Academy</span>
          </h2>
          <p>
            Dive into the world of endless possibilities with courses tailored
            to boost your skills and knowledge. Let’s learn and grow together!
          </p>
          <div className="btn">
            <a className="blue" href="#">
              Explore Now
            </a>
            <a className="yellow" href="#">
              View Courses
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features">
          <h1>Our Key Highlights</h1>
          <p>Shape your future with exceptional benefits</p>
          <div className="fea-base">
            <div className="fea-box">
              <FontAwesomeIcon icon={faGraduationCap} className="i" />
              <h3>Scholarship Opportunities</h3>
              <p>
                Empowering dreams with financial support to deserving learners.
              </p>
            </div>
            <div className="fea-box">
              <FontAwesomeIcon icon={faStar} className="i" />
              <h3>Quality Learning</h3>
              <p>
                Gain access to premium courses designed by industry experts.
              </p>
            </div>
            <div className="fea-box">
              <FontAwesomeIcon icon={faAward} className="i" />
              <h3>Global Recognition</h3>
              <p>
                Achieve certifications that stand out in the global job market.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="course">
          <h1>Trending Courses</h1>
          <p>Join thousands of learners worldwide</p>
          <div className="course-box">
            {[
              { img: c1, name: "JavaScript Beginner Course" },
              { img: c2, name: "HTML Complete Guide" },
              { img: c3, name: "SQL Essentials" },
              { img: c4, name: "Python Masterclass" },
              { img: c5, name: "Java Programming" },
              { img: c6, name: "CSS Styling Mastery" },
            ].map((course, idx) => (
              <div className="courses" key={idx}>
                <img src={course.img} alt={course.name} />
                <div className="details">
                  <p>Updated: 12/08/23</p>
                  <h6>{course.name}</h6>
                  <div className="star">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon key={index} icon={faStar} className="i" />
                    ))}
                    <p>(239)</p>
                  </div>
                </div>
                <div className="cost">$49.99</div>
              </div>
            ))}
          </div>
        </section>

        {/* Registration Section */}
        <section id="registration">
          <div className="reminder">
            <p>Access 100+ Courses for Free</p>
            <h1>Sign Up Today!</h1>
            <div className="time">
              {["18 Days", "23 Hours", "06 Minutes", "58 Seconds"].map(
                (time, idx) => (
                  <div className="date" key={idx}>
                    {time.split(" ")[0]}
                    <br />
                    {time.split(" ")[1]}
                  </div>
                )
              )}
            </div>
          </div>
          {!authToken ? (
            <div className="form">
              <h3>Create Your Free Account</h3>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <input type="tel" placeholder="Phone Number" />
              <div className="btn">
                <a className="yellow" href="#">
                  Register Now
                </a>
              </div>
            </div>
          ) : null}
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
