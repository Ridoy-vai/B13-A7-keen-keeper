import React from 'react';
import ProfileCard from '../FrindsCard/Card';

const Friends = async () => {
    const res = await fetch("http://localhost:3000/Data.json")
    const friends = await res.json();

    return (
        <div className="grid grid-cols-1 p-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto py-10">
            {friends.map(friend => (
                <ProfileCard key={friend.id} friend={friend} />
            ))}
        </div>
    );
};

export default Friends;