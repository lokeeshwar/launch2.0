import React from "react";
import '../../css/home/aboutListSection.css'

export default function AboutListSection() {
  const aboutList = [
    {
      heading: "Recruitment",
      content:
        "Recruitment refers to the overall process of identifying, attracting, screening, shortlisting, and interviewing, suitable candidates for jobs (either permanent or temporary) within an organization. Recruitment can also refer to processes involved in choosing individuals for unpaid roles. Managers, human resource generalists and recruitment specialists may be tasked with carrying out recruitment",
    },
    {
      heading: "Development",
      content:
        "Software Development Life Cycle (SDLC) is a process used by the software industry to design, develop and test high quality softwares. The SDLC aims to produce a high-quality software that meets or exceeds customer expectations, reaches completion within times and cost estimates.",
    },
    {
      heading: "Training",
      content:
        "Specialized training colleges offering postsecondary courses are called professional training colleges and are one of the institution types classified as higher-education institutions. These colleges provide the know-how, technology and skills useful in one's future job and life as well as an improved education.",
    },
  ];

  return (
    <div className="aboutList">
        <ul>
            {aboutList.map((abt,index) => {
                return <div className="list-items">
                    <li key={index}>
                        <div className="list-content">
                            <h4>{abt.heading}</h4>
                            <p>{abt.content}</p>
                        </div>
                    </li>
                </div>
            })}
        </ul>
    </div>
  );
}
