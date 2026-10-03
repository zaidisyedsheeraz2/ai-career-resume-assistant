import React from 'react';
import { Plus, UploadCloud } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ResumeCard from '../components/ResumeCard';

export default function Dashboard() {
  const resumes = [
    { id: 1, title: 'Software Engineer', lastUpdated: '2 days ago' },
    { id: 2, title: 'Fresher Resume', lastUpdated: '1 week ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-5xl mx-auto">
            {/* Greeting */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, User! 👋</h1>
              <p className="text-gray-600 mt-1">Let's land your next dream job.</p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <button className="flex flex-col items-center justify-center p-6 bg-white border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all group">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Plus className="w-6 h-6" />
                </div>
                <span className="font-semibold text-gray-900">Create Resume</span>
                <span className="text-sm text-gray-500 mt-1">Start from scratch or a template</span>
              </button>

              <button className="flex flex-col items-center justify-center p-6 bg-white border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all group">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <span className="font-semibold text-gray-900">Upload Resume</span>
                <span className="text-sm text-gray-500 mt-1">Parse existing PDF or Word doc</span>
              </button>
            </div>

            {/* My Resumes Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">My Resumes</h2>
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                  View all
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {resumes.map((resume) => (
                  <ResumeCard 
                    key={resume.id} 
                    title={resume.title} 
                    lastUpdated={resume.lastUpdated} 
                  />
                ))}
              </div>
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}