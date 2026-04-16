import StatsChart from '@/app/stats/StatsChart';
import React from 'react';

export const metadata = {
    title: "KeenKeeper | Stats Page",
    description:
        "View detailed statistics of your friend activities in KeenKeeper. Analyze contact frequency, interaction trends, relationship progress, and engagement insights in one place.",
    keywords: [
        "KeenKeeper",
        "friend stats",
        "relationship analytics",
        "contact statistics",
        "social activity analysis",
        "friend interaction stats",
        "communication frequency tracker",
        "relationship insights dashboard",
        "activity analytics app",
        "personal connection stats",
        "friendship analytics tool",
        "engagement tracking",
        "social CRM analytics",
        "timeline statistics",
        "relationship progress insights"
    ],
    authors: [{ name: "KeenKeeper Team" }],
};

const StatsPage = () => {

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
            <StatsChart />
        </div>
    );
};

export default StatsPage;