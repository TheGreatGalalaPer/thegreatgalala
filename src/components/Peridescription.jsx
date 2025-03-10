import React from "react";

const Peridescription = () => {
  return (
    <section id="about" className="text-center px-5 py-12 md:py-20 relative">
      {/* Heading */}
      <div className="flex items-center w-full justify-center mb-32">
        <div className="hidden sm:block flex-grow h-2 bg-white rounded-full"></div>
        <h2 className="text-4xl md:text-5xl font-bold px-6 text-[#4AC3EB]">
          About Peri
        </h2>
        <div className="hidden sm:block flex-grow h-2 bg-white rounded-full"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 px-5">
        {/* Left - Image Card */}
        <div className="relative w-full max-w-lg lg:w-1/2 flex justify-center">
          <div className="w-80 sm:w-96 h-96 bg-gradient-to-r from-pink-500 to-blue-500  shadow-lg relative">
            <div
              className="absolute inset-1 bg-cover bg-center "
              style={{ backgroundImage: "url('/peri.jpg')" }}
            ></div>
          </div>
        </div>

        {/* Right - About Text */}
        <div className="max-w-2xl text-white text-l  leading-relaxed lg:w-1/2 font-lexend uppercase mb-24">
          <p>
            PERI Institute of Technology (PERI IT), the best Engineering College
            in Chennai offers 100% placement. PERI IT was established under PERI
            Educational and Charitable Trust in 2010 with an objective of
            shaping future engineers with advanced technology to develop the
            modern world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Peridescription;
