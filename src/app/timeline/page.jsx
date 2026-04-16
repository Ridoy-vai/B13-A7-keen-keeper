import OpenDropdown from '@/ui/OpenDropdown';
import TimelineMap from './TimelineMap';

export const metadata = {
  title: "KeenKeeper | Timeline Page",
  description:
    "View your friend activity timeline in KeenKeeper. Track interactions, contact history, updates, and relationship progress over time in one place.",
  keywords: [
    "KeenKeeper",
    "timeline tracker",
    "friend activity timeline",
    "relationship timeline",
    "contact history tracker",
    "social activity log",
    "friend interaction history",
    "daily communication tracker",
    "relationship progress tracker",
    "friend updates feed",
    "timeline dashboard",
    "social CRM timeline",
    "activity log app",
    "personal connection timeline",
    "friendship timeline manager"
  ],
  authors: [{ name: "KeenKeeper Team" }],
};

const TimelinePage = () => {

    return (
        <div className=" bg-[#F8F9FB] p-8 md:p-16 font-sans text-[#1A2B3B] container mx-auto">
            <div className="max-w-3xl mx-auto">
                {/* Header Section */}
                <h1 className="text-4xl font-bold mb-8">Timeline</h1>
                
                {/* Drop down section */}
               <OpenDropdown/>

                {/* Timeline Items Map */}
              <TimelineMap/>
            </div>
        </div>

    );
};

export default TimelinePage;