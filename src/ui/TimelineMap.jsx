"use client"
import { TimelineContext } from '@/app/Contex/Contex';
import { Video, Phone, MessageSquare, Handshake } from 'lucide-react';
import React, { useContext, useEffect } from 'react';

const TimelineMap = () => {
    const { call, filter } = useContext(TimelineContext);

    // ১. ডুপ্লিকেট রিমুভ এবং ফিল্টারিং লজিক
    const getUniqueFilteredData = () => {
        if (!call) return [];

        // ডুপ্লিকেট রিমুভ করার জন্য একটি Map ব্যবহার করছি
        // এখানে ধরা হয়েছে যে item._id বা item.id.next_due_date এর কম্বিনেশন ইউনিক
        const uniqueMap = new Map();

        call.forEach(item => {
            // ইউনিক কী তৈরি করছি (টাইপ + নাম + তারিখ) যেন একই ইভেন্ট দুইবার না আসে
            const uniqueKey = `${item.type}-${item.id?.name}-${item.id?.next_due_date}`;
            if (!uniqueMap.has(uniqueKey)) {
                uniqueMap.set(uniqueKey, item);
            }
        });

        const uniqueData = Array.from(uniqueMap.values());

        // ফিল্টার অনুযায়ী ডাটা আলাদা করা
        return uniqueData.filter((item) => {
            if (!filter) return true;
            return item.type.toLowerCase() === filter.toLowerCase();
        });

    };
    

    const filteredData = getUniqueFilteredData();



    return (
        <div className="max-w-3xl space-y-4">
            {filteredData.map((item, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                    <div className="shrink-0">
                        {
                            item.type === 'call' && <Phone className="text-[#1E293B] group-hover:scale-110 transition-transform" size={24} />
                        }
                        {
                            item.type === 'massage' && <MessageSquare className="text-[#1E293B] group-hover:scale-110 transition-transform" size={24} />
                        }
                        {
                            item.type === 'video' && <Video className="text-[#1E293B] group-hover:scale-110 transition-transform" size={24} />
                        }
                    </div>

                    <div className="flex flex-col">
                        <div className="flex items-center gap-1 flex-wrap">
                            <span className="font-bold text-lg text-[#2D3E50]">
                                {item.type}
                            </span>
                            <span className="text-gray-400 text-lg font-normal">
                                with {item.id?.name || "Unknown"}
                            </span>
                        </div>

                        <span className="text-gray-400 text-sm font-medium">
                            {item.id?.next_due_date || "No date"}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TimelineMap;