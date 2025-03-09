import React from "react";
import PeriNeonize from "../assets/PeriNeonize.svg";
import tgglogo from "../assets/tgglogo.svg";

const events = [
  {
    id: 1,
    title: "Sponsors broucher",
    image: "/spons.png",
    brochure: "/downloads/Sponsorship_Broucher.pdf",
  },
  {
    id: 2,
    title: "Event Brouchers",
    image: "/downloads/eventverall.jpg",
    brochure: "/downloads/event_Overall.jpg",
  },
];

const Broucherdetails = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-32 px-4 z-10">
      {/* Two Centered Title PNGs */}
      <div className="flex flex-col gap-8 w-full max-w-4xl items-center">
        <img
          src={PeriNeonize}
          alt="Title 1"
          className="w-[200px] sm:w-[250px] md:w-[300px] rounded-lg object-contain"
        />
        <img
          src={tgglogo}
          alt="Title 2"
          className="w-full max-w-2xl rounded-lg object-contain m-4"
        />
      </div>

      {/* Event Cards Section */}
      <div className="flex flex-col items-center w-full max-w-5xl mt-14 gap-64 z-1">
        {events.map((event) => (
          <div key={event.id} className="w-full max-w-2xl text-center">
            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-pink-500">
              {event.title}
            </h2>

            {/* Event Image Card */}
            <div className="relative rounded-lg overflow-hidden shadow-xl mx-auto w-full h-96">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-xl md:text-2xl font-bold "> Download For <span className="text-pink-400">{event.title}</span> Details</h3>
              </div>
            </div>

            {/* Download Link */}
            <div className="mt-5">
              <a
                href={encodeURI(event.brochure)}
                download
                className="text-blue-400 hover:underline text-lg"
              >
                Download Brochure
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Broucherdetails;
