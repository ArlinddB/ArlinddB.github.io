import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <h6 style={{marginLeft: 100}}>
        Created By <span>Arlind Berisha</span>
      </h6>
      <div className="icons" style={{marginRight: 100}}>
        <a href="https://www.linkedin.com/in/arlind-berisha/" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/ArlinddB" target="_blank">
          <i class="fa-brands fa-square-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
