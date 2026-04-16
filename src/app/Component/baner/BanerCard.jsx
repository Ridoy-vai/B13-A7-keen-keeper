// 'use client'
import React from 'react';

const BanerCard = async () => {
    const res = await fetch('https://b-13-a-7-keen-keeper.vercel.app/Data.json',{
        cache: "no-store"
    })
    // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    // const res = await fetch(`${baseUrl}/Data.json`,{
    //     cache: "no-store"
    // })
    const friends = await res.json();

   

    const stats = [
    {
        value: friends.length,
        label: "Total Friends"
    },
    {
        value: friends.filter(friend => friend.status === 'on-track').length,
        label: "On Track"
    },
    {
        value: friends.filter(friend => friend.status === 'need-attention').length,
        label: "Need Attention"
    },
    {
        value: 12,
        label: "Interactions This Month"
    },
];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
                <div
                    key={index}
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

    );
};

export default BanerCard;