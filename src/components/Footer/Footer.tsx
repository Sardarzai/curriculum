import React from 'react';

/* Importing the Toggle component from the Toggle folder. */
import Toggle from '../Toggle/Toggle';

const Footer = () => {
  // ===================Geting Current Year for Copyrights===================//
  const currentYear = new Date().getUTCFullYear();
  // =============================End!=======================================//
  return (
    <div className="app__footer-container">
      {/* // =========================Left Side Column Start============================// */}
      <div className="app__footer-leftside">
        &copy; <span>{currentYear}</span> All rights reserved
      </div>
      {/* // =========================Left Side Column END!============================// */}

      {/* // =========================Right Side Column Start============================// */}
      <div className="app__footer-rightside">
        <Toggle />
      </div>
      {/* // =========================Right Side Column END!============================// */}
    </div>
  );
};

export default Footer;
