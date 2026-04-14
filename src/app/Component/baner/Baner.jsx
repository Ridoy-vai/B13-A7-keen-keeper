import React from 'react';

const Baner = () => {
  // ডাইনামিক ডাটা
  const stats = [
    { id: 1, value: 10, label: "Total Friends" },
    { id: 2, value: 3, label: "On Track" },
    { id: 3, value: 6, label: "Need Attention" },
    { id: 4, value: 12, label: "Interactions This Month" },
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Title Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
          Friends to keep close in your life
        </h1>
        
        {/* Description */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the 
          relationships that matter most.
        </p>

        {/* Add Friend Button */}
        <button className="bg-[#1B3B32] hover:bg-[#152e27] text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 mx-auto transition-all mb-16">
          <span className="text-xl">+</span> Add a Friend
        </button>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center"
            >
              <span className="text-4xl font-bold text-[#1B3B32] mb-2">
                {stat.value}
              </span>
              <span className="text-gray-500 text-sm font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Thin Line */}
        <div className="border-t border-gray-200 w-full pt-10"></div>
        
      </div>
    </div>
  );
};

export default Baner;