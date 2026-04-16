import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // 'X' এর জন্য Twitter আইকন ব্যবহার করছি

const Footer = () => {
  return (
    <footer className="bg-[#1F3D32] text-white py-10 px-6 md:px-12 font-sans container mx-auto">
      <div className="max-w-7xl mx-auto text-center">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          KeenKeeper
        </h1>

        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="flex flex-col items-center gap-4 mb-10">
          <h3 className="text-sm font-semibold tracking-wide">Social Links</h3>
          <div className="flex gap-4">

            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1F3D32] hover:bg-gray-200 transition-colors">
              <FaFacebook size={20} />
            </a>

            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1F3D32] hover:bg-gray-200 transition-colors">
              <FaInstagram size={20} fill="currentColor" stroke="none" />
            </a>

            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1F3D32] hover:bg-gray-200 transition-colors">
              <FaTwitter size={20} fill="currentColor" stroke="none" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 w-full mb-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;