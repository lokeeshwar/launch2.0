import React from "react";
import '../../css/home/serviceSection.css'
import manpower from "../../images/home/servicesection/manpower.jpg";
import about from "../../images/home/servicesection/about.jpg";

export default function ServiceSection() {
  const services = [
    {
      heading: "We are Destiny Manpower Recruitment Services...",
      content:
        "We have envisioned ourselves to be a reliable human resource solution provider and delivering the most competitive talent in the industry through benchmark recruitment procedures.",
      image: manpower,
    },
    {
      heading: "Your Connection To Recruitment...",
      content:
        "Your Connection To Recruitment... To provide the best as per the requirement specified by the clients. To focus on sharpening the skills of people.",
      image: about,
    },
  ];

  return (
    <div className="serviceSection">
      <h2>Welcome to My Inception</h2>
      <div className="bottom-service">
        <ul>
          {services.map((ser, index) => {
            return (
              <div>
                <li key={index}>
                  <h4>{ser.heading}</h4>
                  <div>
                    <p>{ser.content}</p>
                    <img src={ser.image} alt="my inception" />
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
 