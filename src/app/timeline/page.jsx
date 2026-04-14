import OpenDropdown from '@/ui/OpenDropdown';
import TimelineMap from '../../ui/TimelineMap';
const TimelinePage = () => {

    return (
        <div className="min-h-screen bg-[#F8F9FB] p-8 md:p-16 font-sans text-[#1A2B3B]">
            <div className="max-w-3xl mx-auto">
                {/* Header Section */}
                <h1 className="text-4xl font-bold mb-8">Timeline</h1>
                
                {/* Drop down section */}
               <OpenDropdown/>

                {/* Timeline Items */}
              <TimelineMap/>
            </div>
        </div>

    );
};

export default TimelinePage;