"use client";

import { useState, useEffect } from "react";
import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }));
      setDate(new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now));
    };

    updateDateTime(); // Call immediately on mount
    const interval = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div 
        className="h-[300px] w-full bg-cover bg-center rounded-[20px] flex items-start pt-10"
        style={{ backgroundImage: "url('/images/hero-background.png')" }}
      >
        <div className="flex h-full flex-col justify-start max-md:px-5 max-md:py-8 lg:p-11">
          <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
          <p className="text-lg font-medium lg:text-2xl mt-3" style={{ color: "var(--sky-1)" }}>
            {date}
          </p>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;



