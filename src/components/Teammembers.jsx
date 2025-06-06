import React from "react";
import memberDetails from "../constants/memberDetails";
import Member from "./ui-components/Member";

const Teammember = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 pt-48 space-y-10 overflow-hidden pb-48">
      <div className="text-white pb-16 text-4xl tracking-tight lg:mt-20 lg:text-6xl w-full flex items-center justify-center z-10">
        <div className="flex items-center w-full">
          <div className="flex-1 h-2 bg-gray-300 rounded-full hidden sm:block"></div>
          <span className="mx-4 text-[#4AC3EB]">Meet our team</span>
          <div className="flex-1 h-2 bg-gray-300 rounded-full hidden sm:block"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 z-10">
        {memberDetails.slice(0, 6).map((member) => (
          <Member
            key={member.id}
            image={member.image}
            name={member.name}
            role={member.role}
            instagram={member.instagram}
          />
        ))}
      </div>

    </div>
  );
};

export default Teammember;
