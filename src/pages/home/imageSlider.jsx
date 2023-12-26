import React, { useState } from "react";
import "../../css/home/imageSlider.css";
import slide1 from "../../images/home/imageSlider/slide-1.jpg";
import slide2 from "../../images/home/imageSlider/slide-2.jpg";
import slide3 from "../../images/home/imageSlider/slide-3.jpg";
import { FaChevronLeft , FaChevronRight} from "react-icons/fa";

export default function ImageSlider() {
  const slides = [{ image: slide1 }, { image: slide2 }, { image: slide3 }];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="imageSlider">

      <button onClick={previousSlide} id="imgslider-button1"><FaChevronLeft /></button>

      {slides.map((img, index) => (
        <div key={index} className="slides">
          {index === current && <img src={img.image} alt={`slide ${index}`} />}
        </div>
      ))}

      <button onClick={nextSlide} id="imgslider-button2"><FaChevronRight /></button>

    </div>
  );
}
    
