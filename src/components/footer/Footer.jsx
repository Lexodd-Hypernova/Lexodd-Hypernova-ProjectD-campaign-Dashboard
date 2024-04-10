import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="footer-insider">
        &copy; {currentYear} ProjectD. All rights reserved
      </div>
      <div className="footer-insider-right">
        All data on this website is sourced from <br /> reputable meta and media
        platforms
      </div>
    </div>
  );
};

export default Footer;
