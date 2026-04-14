import { Archive, Bell, MessageSquare, Phone, Trash2, Video } from "lucide-react";
import Image from "next/image";


const FriendProfile = async ({ params }) => {
    // ডাটা ডেসট্রাকচারিং
    const { friendsDetails } = await params;

    const res = await fetch('http://localhost:3000/Data.json')
    const friends = await res.json()

    const matchFrind = friends.filter(fnd => Number(fnd.id) === Number(friendsDetails))
    const matchFrinds = matchFrind[0]
    
    const { id, name, picture, email, days_since_contact, status, tags=[], bio, goal, next_due_date } = matchFrinds    
    

    return (
        <div className="bg-[#F8FAFC] p-4 md:p-8 min-h-screen flex justify-center items-start font-sans">
            <div className="max-w-5xl w-full grid grid-cols-12 gap-6">

                {/* LEFT COLUMN */}
                <div className="col-span-12 md:col-span-4 space-y-4">
                    {/* Profile Card */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gray-50 shadow-inner">
                            <Image
                                src={picture}
                                alt={name}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-xl font-bold text-[#1E293B]">{name}</h2>

                        {/* Status & Tags */}
                        <div className="flex flex-col items-center gap-2 mt-3">
                            <span className={`text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase shadow-sm ${status === 'overdue' ? 'bg-[#FF4D4D]' : 'bg-green-500'}`}>
                                {status}
                            </span>
                            <div className="flex flex-wrap justify-center gap-2">
                                {tags.map((tag, index) => (
                                    <span key={index} className="bg-[#DCFCE7] text-[#15803D] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="mt-6 text-gray-500 italic text-sm leading-relaxed px-2">
                            {bio}
                        </p>
                        <p className="mt-4 text-gray-400 text-xs">
                            Preferred: <span className="text-gray-600 font-medium">{email}</span>
                        </p>
                    </div>

                    {/* Side Actions */}
                    <div className="space-y-2">
                        <button className="w-full bg-white border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 text-[#1E293B] font-medium hover:bg-gray-50 transition-all text-sm shadow-sm">
                            <Bell size={16} /> Snooze 2 Weeks
                        </button>
                        <button className="w-full bg-white border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 text-[#1E293B] font-medium hover:bg-gray-50 transition-all text-sm shadow-sm">
                            <Archive size={16} /> Archive
                        </button>
                        <button className="w-full bg-white border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 text-[#FF4D4D] font-medium hover:bg-red-50 transition-all text-sm shadow-sm">
                            <Trash2 size={16} /> Delete
                        </button>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="col-span-12 md:col-span-8 space-y-6">

                    {/* Top Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                            <h3 className="text-3xl font-bold text-[#1B3B32]">{days_since_contact}</h3>
                            <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider mt-1">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                            <h3 className="text-3xl font-bold text-[#1B3B32]">{goal}</h3>
                            <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider mt-1">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                            <h3 className="text-xl md:text-2xl font-bold text-[#1B3B32] leading-none mb-1">
                                {next_due_date}
                            </h3>
                            <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">Next Due</p>
                        </div>
                    </div>

                    {/* Relationship Goal Section */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <button className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 border border-gray-200 px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all shadow-sm">
                            Edit
                        </button>
                        <h4 className="text-[#1B3B32] font-bold text-lg mb-4">Relationship Goal</h4>
                        <p className="text-gray-500 text-sm">
                            Connect every <span className="text-[#1E293B] font-black">{goal} days</span>
                        </p>
                    </div>

                    {/* Quick Check-In Section */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h4 className="text-[#1B3B32] font-bold text-lg mb-6">Quick Check-In</h4>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-gray-100 bg-[#F9FAFB] hover:bg-gray-100 transition-all group">
                                <Phone className="text-[#1E293B] group-hover:scale-110 transition-transform" size={24} />
                                <span className="text-xs font-bold text-gray-600 uppercase tracking-tighter">Call</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-gray-100 bg-[#F9FAFB] hover:bg-gray-100 transition-all group">
                                <MessageSquare className="text-[#1E293B] group-hover:scale-110 transition-transform" size={24} />
                                <span className="text-xs font-bold text-gray-600 uppercase tracking-tighter">Text</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-gray-100 bg-[#F9FAFB] hover:bg-gray-100 transition-all group">
                                <Video className="text-[#1E293B] group-hover:scale-110 transition-transform" size={24} />
                                <span className="text-xs font-bold text-gray-600 uppercase tracking-tighter">Video</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendProfile;