"use client"
import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { TimelineContext } from '../Contex/Contex';

const StatsPage = () => {
    const { massage, video, phone, activeIndex, setActiveIndex } = useContext(TimelineContext);

    const data = [
        { name: 'Messages', value: massage.length, color: '#10B981' },
        { name: 'Video Calls', value: video.length, color: '#F59E0B' },
        { name: 'Audio Calls', value: phone.length, color: '#EF4444' },
    ];

    const totalValue = data.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
            {/* মূল কার্ড */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-100/50 flex flex-col md:flex-row items-center gap-8">

                {/* ১. চার্ট সেকশন (Responsive) */}
                <div className="relative w-full h-70 md:w-1/2 md:h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            {/* <Tooltip content={<CustomTooltip />} cursor={false} /> */}
                            <Pie
                                data={data}
                                dataKey="value"
                                innerRadius="70%" // প্রিমিয়াম ডোনাট লুক
                                outerRadius="90%"
                                paddingAngle={6}  // গ্যাপগুলোর সুন্দর লুক
                                cornerRadius={8}  // কার্ভড এজ
                                stroke="none"      // বর্ডার ছাড়া ক্লিন লুক
                                onMouseEnter={(_, index) => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        style={{
                                            filter: activeIndex === index ? `drop-shadow(0 8px 12px ${entry.color}50)` : 'none',
                                            transition: 'all 0.3s ease',
                                            opacity: activeIndex === null || activeIndex === index ? 1 : 0.6,
                                            cursor: 'pointer'
                                        }}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* ২. কাস্টম লিজেন্ড এবং ইনফরমেশন সেকশন */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-[#1A2B3B] mb-1">Interaction Stats</h2>
                    <p className="text-gray-400 text-sm mb-6">Visual breakdown of your timeline activities</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col gap-1 
                                ${activeIndex === index ? 'bg-gray-50 border-gray-200' : 'bg-transparent border-gray-100'}`}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                    <span className="font-semibold text-[#2D3E50] text-sm">{item.name}</span>
                                </div>
                                <div className="flex items-baseline justify-between mt-1">
                                    <span className="text-2xl font-bold text-[#1A2B3B]">{item.value}</span>
                                    <span className="text-xs font-medium text-gray-400">
                                        {((item.value / totalValue) * 100).toFixed(0)}%%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StatsPage;