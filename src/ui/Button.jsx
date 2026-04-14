"use client"
import { TimelineContext } from '@/app/Contex/Contex';
import { MessageSquare, Phone, Video } from 'lucide-react';
import React, { useContext, useEffect } from 'react';

const Button = ({ matchedFrind }) => {
    const { call, setCall, setmassage, setvideo, setphone, phone, video, massage } = useContext(TimelineContext);
    const handleClick = (type) => {
        const newItem = {
            id: matchedFrind,
            type: type,

        };

        setCall([...call, newItem]);
        if (type === 'call') {
            setphone([...call, newItem])
            const uniqueData = Array.from(
                new Map(phone.map(item => [item.id, item])).values()
            );

            console.log(uniqueData);
            console.log(phone, type)
        }
        if (type === 'massage') { setmassage([...call, newItem]) };
        if (type === 'video') { setvideo([...call, newItem]) }
    };

    return (
        <div className="grid grid-cols-3 gap-4">
            <button onClick={() => handleClick("call")} className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-gray-100 bg-[#F9FAFB] hover:bg-gray-100 transition-all group">
                <Phone className="text-[#1E293B] group-hover:scale-110 transition-transform" size={24} />
                <span className="text-xs font-bold text-gray-600 uppercase tracking-tighter">Call</span>
            </button>
            <button onClick={() => handleClick("massage")} className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-gray-100 bg-[#F9FAFB] hover:bg-gray-100 transition-all group">
                <MessageSquare className="text-[#1E293B] group-hover:scale-110 transition-transform" size={24} />
                <span className="text-xs font-bold text-gray-600 uppercase tracking-tighter">Text</span>
            </button>
            <button onClick={() => handleClick("video")} className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-gray-100 bg-[#F9FAFB] hover:bg-gray-100 transition-all group">
                <Video className="text-[#1E293B] group-hover:scale-110 transition-transform" size={24} />
                <span className="text-xs font-bold text-gray-600 uppercase tracking-tighter">Video</span>
            </button>
        </div>
    );
};

export default Button;