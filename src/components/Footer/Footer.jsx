import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <ul className="footer-social-media">
        <li>
          <a href="https://github.com/Jzridar?tab=repositories">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jayasri-sekar-842aa1263/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <address>
             e-mail: <a href="mailto:jzridar@gmail.com">jzridar@gmail.com</a> 
          </address>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
