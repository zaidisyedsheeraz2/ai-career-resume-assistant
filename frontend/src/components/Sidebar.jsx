import React from 'react';
import { LayoutDashboard, FileText, LayoutTemplate, Briefcase, CheckCircle, Settings } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: 'My Resumes', icon: FileText, active: false },
    { name: 'Templates', icon: LayoutTemplate, active: false },
    { name: 'Job Analysis', icon: Briefcase, active: false },
    { name: 'ATS Analysis', icon: CheckCircle, active: false },
    { name: 'Settings', icon: Settings, active: false },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-[calc(100vh-4rem)] flex-shrink-0 hidden md:block overflow-y-auto">
      <nav className="p-4 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              item.active 
                ? 'bg-indigo-50 text-indigo-700' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <item.icon className={`w-5 h-5 ${item.active ? 'text-indigo-700' : 'text-gray-400'}`} />
            {item.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}