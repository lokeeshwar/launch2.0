import React from "react";
import { FaUsers } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { PiNotepad } from "react-icons/pi";

export default function CountsSection() {
  const counts = [
    { title: "Data search", icon: <FaDatabase /> },
    { title: "Shortlisting" ,icon: <FaUsers />},
    { title: "Offer Letter" ,icon: <PiNotepad />},
    { title: "Joining" ,icon: <FaUsers />},
  ];

  return (
    <div>
      <ul>
        {counts.map((counts, index) => {
          return (
            <div>
              <li key={index}>
                <p>{counts.icon}</p>
                <p>{counts.title}</p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
