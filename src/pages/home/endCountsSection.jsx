import React from 'react'
import work from '../../images/home/counts/work.jpg'

export default function EndCountsSection() {

const endCount = [
    'To Provide recruitment and software development training',
    'To provide the best as per the requirement specified by the clients. To focus on sharpening the skills of people.',
    'Honesty, Integrity, Quality, Excellence.'
]

  return (
    <div>
        <h2>Why To Work With Us</h2>
        <div>
        <ul>
        {endCount.map((end,index) => {
            return <li key={index}>
                <p>{end}</p>
            </li>
        })}
        </ul>

        <img src= {work} alt="my inception" />
        </div>


    </div>
  )
}
