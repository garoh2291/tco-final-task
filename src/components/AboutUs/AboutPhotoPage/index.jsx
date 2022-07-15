import React from "react";
import "./styles.css";

export const AboutPhotoPage = () => {
  const imgUrl = require("../../../assets/photo.jpeg");
  return (
    <div className="about_photo_page">
      <div className="about_photo">
        <img src={imgUrl} alt="my " />
      </div>
      <div className="social_networks">
        <a href="https://www.linkedin.com/in/garnik-hovsepyan-582519189/">
          <i className="bx bxl-linkedin-square"></i>
        </a>
        <a href="https://github.com/garoh2291">
          <i className="bx bxl-github"></i>{" "}
        </a>
      </div>
    </div>
  );
};
