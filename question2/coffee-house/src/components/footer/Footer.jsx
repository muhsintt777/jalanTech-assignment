import React from "react";
import "./Footer.css";

const Footer = ({ bill }) => {
  return (
    <footer>
      <h2>Total: {bill}</h2>
    </footer>
  );
};

export default Footer;
