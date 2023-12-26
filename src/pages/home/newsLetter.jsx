import React, { useState } from 'react'

export default function NewsLetter() {
    const[news,setNews] = useState()

    const handelClick = () => {
        console.log(news)
    }

  return (
    <div>
        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
        <input type="text" onChange={(e) => setNews(e.target.value)} />
        <button onClick={handelClick}>Subscribe Now</button>
    </div>
  )
}
