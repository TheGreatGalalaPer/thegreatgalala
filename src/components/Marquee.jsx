import React from "react";

const Marquee = () => {
  return (
    <div className="flex flex-col gap-10 overflow-hidden mt-32 pt-16 h-[80vh]">
      {/* Marquee Row 1 */}
      <div className="relative w-full overflow-hidden bg-pink-400 text-black -rotate-3">
        <div className="flex whitespace-nowrap animate-marquee">
          <p className="text-[clamp(0.6rem,5vw,6.2rem)] font-bold font-bebas flex items-center gap-3">
            <span className="text-black"></span> The Great Galala{" "}
            <span className="text-black">•</span> The Great Galala{" "}
            <span className="text-black">•</span> The Great Galala{" "}
            <span className="text-black">•</span> The Great Galala
          </p>
        </div>
      </div>

      {/* Marquee Row 2 */}
      <div className="relative w-full overflow-hidden bg-black text-pink-400 rotate-3">
        <div className="flex whitespace-nowrap animate-marquee">
          <p className="text-[clamp(1.5rem,4vw,6.2rem)] font-bold font-bebas flex items-center gap-3">
            <span className="text-pink-500">•</span> Peri Neonize{" "}
            <span className="text-pink-500">•</span> Peri Neonize{" "}
            <span className="text-pink-500">•</span> Peri Neonize{" "}
            <span className="text-pink-500">•</span> Peri Neonize
          </p>
        </div>
      </div>

      {/* Marquee Row 3 */}
      <div className="relative w-full overflow-hidden bg-pink-400 text-black -rotate-3">
        <div className="flex whitespace-nowrap animate-marquee">
          <p className="text-[clamp(1.5rem,8vw,6.2rem)] font-bold font-bebas flex items-center gap-3">
            <span className="text-black">•</span> 2025 <span className="text-black">•</span> 2025{" "}
            <span className="text-black">•</span> 2025 <span className="text-black">•</span> 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
