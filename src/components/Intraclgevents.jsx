import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";
import {
  technicalEvents,
  onStageEvents,
  offStageEvents,
} from "../constants/intraEventDetails";
import ClgEventscard from "./ui-components/Clgeventscard";

export const Intraclgevents = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 pt-50 overflow-hidden">
      <CustomTabs />
    </div>
  );
};

const CustomTabs = () => {
  const { events } = useParams();
  const isIntracollege = events?.toLowerCase() === "intracollege";

  const [activeTab, setActiveTab] = useState(
    isIntracollege ? "onstage" : "onstage"
  );
  const [search, setSearch] = useState("");

  return (
    <div className="w-full flex flex-col items-center z-10">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search event..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-[300px] sm:max-w-[400px] p-2 text-sm sm:text-lg mb-5 text-white border-2 border-[#ff007f] rounded-lg outline-none bg-transparent"
        style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
      />

      {/* Tabs Container */}
      <div className="relative flex justify-center items-center p-1 sm:p-2 rounded-full border-2 border-transparent bg-clip-padding animate-glow">
        <div className="relative flex w-auto gap-2 sm:gap-4 px-2 py-1 rounded-full bg-[#0d0d0d] border-2 border-[#ff00ff] shadow-[0_0_10px_#ff00ff] transition-all">
          <TabButton
            label="On-Stage"
            active={activeTab === "onstage"}
            onClick={() => setActiveTab("onstage")}
          />
          <TabButton
            label="Off-Stage"
            active={activeTab === "offstage"}
            onClick={() => setActiveTab("offstage")}
          />
          {isIntracollege && (
            <TabButton
              label="Technical"
              active={activeTab === "technical"}
              onClick={() => setActiveTab("technical")}
            />
          )}
        </div>
      </div>

      {/* Event List */}
      <div className="mt-6 sm:mt-10 w-full flex flex-col items-center">
        <EventList activeTab={activeTab} search={search} />
      </div>
    </div>
  );
};

/* Tab Button Component */
const TabButton = ({ label, active, onClick }) => {
  return (
    <button
      className={`px-3 py-1 sm:px-4 sm:py-2 text-white uppercase font-semibold rounded-full transition-all text-xs sm:text-sm md:text-base lg:text-lg ${
        active ? "bg-[#ff00ff]" : "hover:bg-[#ff00ff5d]"
      }`}
      style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

/* Event List Component */
const EventList = ({ activeTab, search }) => {
  let events = [];

  if (activeTab === "technical") {
    events = technicalEvents;
  } else if (activeTab === "onstage") {
    events = onStageEvents;
  } else if (activeTab === "offstage") {
    events = offStageEvents;
  }

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-4 sm:gap-6 w-full max-w-6xl 
           grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
           items-start justify-items-center"
    >
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <BackgroundGradient key={event.title}>
            <ClgEventscard imageUrl={event.image} eventName={event.title} />
          </BackgroundGradient>
        ))
      ) : (
        <p className="text-gray-500 text-sm sm:text-lg">No events found.</p>
      )}
    </motion.div>
  );
};

export default Intraclgevents;
