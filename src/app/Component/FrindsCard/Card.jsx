import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col items-center w-64 text-center">
      {/* Profile Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-transparent">
        <image
          src={user.image} 
          alt={user.name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="text-[#2D3748] text-xl font-bold mb-1">{user.name}</h2>

      {/* Time Ago */}
      <p className="text-gray-400 text-sm mb-4">{user.timeAgo}</p>

      {/* Work Badge */}
      <span className="bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-3">
        {user.category}
      </span>

      {/* Status Badge */}
      <span className="bg-[#F6AD55] text-white text-sm font-semibold px-6 py-2 rounded-2xl shadow-sm">
        {user.status}
      </span>
    </div>
  );
};

export default ProfileCard;