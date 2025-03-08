import React from "react";
import tgglogo1 from "../assets/tgglogo1.png";
import Carousel from "./ui-components/Carousel";
import { BackgroundGradient } from "./ui/background-gradient";

const About = () => {
  return (
    <div className="flex w-full min-h-screen overflow-hidden px-6 py-4 flex-col items-center ">
      <div className="w-full flex flex-col items-center">
        <div className="text-white pb-16 text-4xl tracking-tight lg:mt-20 lg:text-6xl w-full">
          <div
            className="my-8 flex items-center gap-4 after:h-2 after:bg-gray-300 after:rounded-full after:content-[''] 
                      after:flex-1 after:w-full sm:after:w-3/4 md:after:w-1/2 lg:after:w-1/4 xl:after:w-1/6 
                      after:hidden sm:after:block text-center"
          >
            Previously on
          </div>
        </div>
        <div className="flex justify-center w-full">
          <img
            className="w-96 sm:w-96 md:w-[25rem] lg:w-[30rem] xl:w-[50rem]  mb-0"
            src={tgglogo1}
            alt="tgglogo1"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full px-6 lg:px-16 py-11 gap-10 mb-16">
          <div className="lg:w-1/2 w-full flex justify-center items-center">
            <BackgroundGradient className="flex justify-center items-center">
              <Carousel />
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
