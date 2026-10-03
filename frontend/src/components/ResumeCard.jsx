import React from 'react';
import { FileText, MoreVertical, Edit3, Download, Trash2 } from 'lucide-react';

export default function ResumeCard({ title, lastUpdated }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow group relative">
      {/* Document Icon Placeholder */}
      <div className="w-full h-32 bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400 group-hover:border-indigo-300 group-hover:text-indigo-400 transition-colors">
        <FileText className="w-10 h-10" />
      </div>
      
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-gray-900 text-base">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">Updated {lastUpdated}</p>
        </div>
        
        {/* Action Menu (Hidden by default, visible on hover) */}
        <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      {/* Hover overlay actions (Optional nice-to-have) */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-2 bg-white rounded-full shadow-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50">
          <Edit3 className="w-4 h-4" />
        </button>
        <button className="p-2 bg-white rounded-full shadow-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50">
          <Download className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}