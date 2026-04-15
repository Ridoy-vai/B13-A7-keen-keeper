import React from 'react';
import BanerCard from './BanerCard';

const Baner = () => {

  return (
    <div className="bg-[#F9FAFB]  py-16 px-4 font-sans rounded-3xl mt-1 max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        <button className="bg-[#1B3B32] hover:bg-[#152e27] text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 mx-auto transition-all mb-16">
          <span className="text-xl">+</span> Add a Friend
        </button>

        <BanerCard />

      </div>
    </div>
  );
};

export default Baner;