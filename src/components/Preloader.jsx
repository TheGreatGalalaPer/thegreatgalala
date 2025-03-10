import React from "react";

const Preloader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1E1334] z-500">
            <div className="relative w-40 h-40 md:w-70 md:h-70">
                {/* Rotating Border */}
                <div className="absolute w-full h-full border-r-6 border-[#ff00e1] rounded-full animate-spin"></div>

                {/* Centered Text */}
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[8px] md:text-sm font-bold uppercase text-center whitespace-nowrap w-max">
                    THE GREAT GALALA
                </h1>

            </div>
        </div>
    );
};

export default Preloader;
