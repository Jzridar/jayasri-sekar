import React from "react";
import Typical from "react-typical";
import profileImg from '../../images/JS Profile.jpg'
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
    
      <div className="header-content">
        <h1>Hello!Everyone,Welcome to  </h1>
        <h2 className="fullname">Jayasri Sekar's Personal portfolio</h2>
        <h2>
          I'm a {" "}

{/* Typical is a self closing component that we installed in our dependencies */}
   <Typical
            steps={[
              "Full Stack Developer 💻", //Got these emojies from coolsymbol.com
              1000,
              "Frontend Developer ✅",
              1000,
              "Backend Developer 🏆",
              1000,
              "React Developer ⚛️",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          Software Engineer excelling in software development with a focus on JavaScript Full Stack Development. Seeking to use proven skills in HTML, CSS, JavaScript, and React experience to meet business needs. Willingness to continue to learn and add to my skills to further sharpen my knowledge and experience.
        </p>

      </div>
      {/* Image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
