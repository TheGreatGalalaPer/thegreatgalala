import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carousel() {
  let [current, setCurrent] = useState(0);
  let slides = [
    "/band.png",
    "/dancee.png",
    "/guest4.png",
    "/beatbox.png",
    "/mguest2.png",
    "/mguest2.pngguest3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  let previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  let nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="overflow-hidden relative max-w-[600px] max-h-[400px] ">
      <div
        className="flex transition-transform ease-out duration-1000 "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, index) => (
          <img key={index} src={s} alt={`Slide ${index}`} className="w-full " />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-3 text-3xl">
        <button onClick={previousSlide}>
        </button>
        <button onClick={nextSlide}>
        </button>
      </div>
    </div>
  );
}
