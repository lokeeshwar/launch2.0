import React from "react";
import '../../css/home/aboutUsSection.css'

// import about from "../../images/home/servicesection/about.jpg";

export default function AboutUsSection(props) {
  return (
    <div className="aboutSection">
      <img src={props.aboutSection.image} alt=" my inception" />
      <div className="about-right">
        <h2>{props.aboutSection.heading}</h2>
        <p>{props.aboutSection.content}</p>
      </div>
    </div>
  );
}
