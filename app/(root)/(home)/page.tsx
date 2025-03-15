import React from 'react';
import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(now);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div 
        className="h-[300px] w-full bg-cover bg-center rounded-[20px]"
        style={{ backgroundImage: "url('/images/hero-background.png')" }}
      >
        <div className='flex h-full flex-col justify-center max-md:px-5 max-md:py-8 lg:p-11'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl translate-y-[-10px]'>{time}</h1> {/* Shifted Up */}
            <p className='text-lg font-medium lg:text-2xl' style={{ color: "var(--sky-1)" }}>
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;

