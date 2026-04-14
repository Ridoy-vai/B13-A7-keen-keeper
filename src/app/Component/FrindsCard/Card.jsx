import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfileCard = ({ friend }) => {
  return (
    <Link href={`/${friend.id}`}>
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col items-center space-y-5 w-64 h-full text-center">
        {/* friend.Image */}
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-transparent">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="text-[#2D3748] text-xl font-bold mb-1">{friend.name}</h2>

        {/* Time Ago */}
        <p className="text-gray-400 text-sm mb-4">{friend.days_since_contact} Day ago</p>

        {/* Work Badge */}

        <div className="flex gap-2 flex-wrap mb-3 w-full border border-amber-200 text-center justify-center">
          {
            friend.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider"
              >
                {tag}
              </span>
            ))
          }
        </div>

        {/* Status Badge */}
        {
          friend.status === "overdue" &&
          <span className="bg-[#EF4444] text-white text-sm font-semibold px-6 py-2 rounded-2xl shadow-sm">
            {friend.status}
          </span>
        }
        {
          friend.status === "almost due" &&
          <span className="bg-[#F6AD55] text-white text-sm font-semibold px-6 py-2 rounded-2xl shadow-sm">
            {friend.status}
          </span>
        }
        {
          friend.status === "on-track" &&
          <span className="bg-[#244D3F] text-white text-sm font-semibold px-6 py-2 rounded-2xl shadow-sm">
            {friend.status}
          </span>
        }
      </div>
    </Link>
  );
};

export default ProfileCard;