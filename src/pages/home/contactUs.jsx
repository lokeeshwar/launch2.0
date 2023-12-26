import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";

export default function ContactUs() {
  const contact = [
    {
      icon: <IoLocationOutline />,
      contact: "Our Address",
      details:
        "No # 4/ 18 Shiny Tech park,Poonamallee Road, Ekkattuthangal,Chennai - 600032.",
    },
    {
      icon: <IoMailOutline />,
      contact: "Email Us",
      details: "support@myinceptiontech.co.in",
    },
    {
      icon: <BiPhoneCall />,
      contact: "Call Us",
      details: "+91 9884792981,+91 9176777890",
    },
  ];
  return (
    <div>
      <h2>Contact Us</h2>
      <ul>
        {contact.map((contact, index) => {
          return (
            <div>
              <li key={index}>
                <p>{contact.icon}</p>
                <h3>{contact.contact}</h3>
                <p>{contact.details}</p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
