import React from "react";
import { Link } from "react-router-dom";

const ClgEventscard = ({ imageUrl, eventName, extraText, extraDate}) => {
  return (
    <Link to={`/${eventName.toLowerCase().replace(/\s+/g, "")}`}>
      <div className="relative drop-shadow-xl w-64 sm:w-80 md:w-96 h-96 sm:h-[450px] md:h-[500px] overflow-hidden  bg-[#3d3c3d]">
        {/* Image - Fills Almost Entire Card */}
        <img
          src={imageUrl}
          alt="Event"
          className="absolute inset-0 w-full h-full object-cover z-[1]"
        />

        {/* Overlay to Darken Image for Better Text Visibility */}
        <div className="absolute inset-0 bg-black opacity-50 z-[2] " />

        {/* Event Name - Centered */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl sm:text-xl md:text-2xl font-bold z-[3]"
          style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
        >
          {/* Event Name */}
          <p>{eventName}</p>

          {/* Extra Text (only if it exists) */}
          {extraText && <p className="text-white-900 text-sm mt-1">{extraText}</p>}

          {/* Extra Date (only if it exists) */}
          {extraDate && <p className="text-white-900 text-[300] mt-1">{extraDate}</p>}

        </div>
        {/* Neon Glow Effect - Slightly Visible */}
        <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-500 blur-[50px] -left-1/2 -top-1/2 opacity-40" />
      </div>

    </Link>
  );
};

export default ClgEventscard;
