import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">JFX Trading</h1>

        <ul className="footer__list">

        <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

       

          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>


       
        </ul>

        <div className="footer__social">
          {/* <a
            href="https://www.linkedin.com/in/john-basgallop-12b8a6210/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/johnnybasgallop"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a> */}

      
        </div>
  
      </div>
    </footer>
  );
};

export default Footer;
