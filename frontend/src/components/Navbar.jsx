import React from 'react';
import { User, ChevronDown, Bell } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-2">
        {/* Placeholder Logo */}
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">R</span>
        </div>
        <span className="text-xl font-bold text-gray-800 tracking-tight">ResumeAI</span>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="text-gray-500 hover:text-indigo-600 transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold group-hover:bg-indigo-200 transition-colors">
            U
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-gray-700 group-hover:text-gray-900">
            <span>User</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}