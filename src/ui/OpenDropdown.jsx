"use client"
import { TimelineContext } from '@/app/Contex/Contex';
import React, { useContext } from 'react';
import { ChevronDown } from 'lucide-react';

const OpenDropdown = () => {
    const {  open, setOpen, setFilter } = useContext(TimelineContext);

    const handleFilter = (Type) => {
        setFilter(Type)
        setOpen(false)
    }

    return (
        <div className="relative inline-block mb-5">

            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-64 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-500 shadow-sm"
            >
                <span>Filter timeline</span>
                <ChevronDown size={20} />
            </button>

            {open && (
                <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-sm mt-2 z-50">
                    <div onClick={() => handleFilter("call")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Call
                    </div>
                    <div onClick={() => handleFilter("massage")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Message
                    </div>
                    <div onClick={() => handleFilter("video")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Video
                    </div>
                </div>
            )}

        </div>
    );
};

export default OpenDropdown;