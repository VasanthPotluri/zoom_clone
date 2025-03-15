import React from 'react';
import CallList from '@/components/CallList';
const Upcoming = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      {/* ✅ Smallest text while maintaining readability */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold px-4">
        Upcoming
      </h1>
      <CallList type="upcoming" />
    </section>
  );
};

export default Upcoming;