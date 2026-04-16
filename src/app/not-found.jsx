import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-4">
            
            {/* Big 404 Text */}
            <h1 className="text-8xl font-extrabold mb-4 animate-bounce">
                404
            </h1>

            {/* Message */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Page Not Found
            </h2>

            <p className="text-center max-w-md mb-6 text-gray-200">
                Oops! The page you are looking for does not exist or has been moved.
            </p>

            {/* Button */}
            <Link href="/">
                <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                    Go Back Home
                </button>
            </Link>

            {/* Extra decoration */}
            <div className="absolute bottom-5 text-sm text-gray-300">
                © 2026 Your App
            </div>
        </div>
    );
};

export default NotFound;