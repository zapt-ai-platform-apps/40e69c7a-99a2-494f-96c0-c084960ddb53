import React from 'react';

export default function EntriesList({ entries }) {
  return (
    <div className="mt-6 w-full max-w-xl space-y-3">
      <h4 className="text-2xl font-heading mb-2">Entries</h4>
      {entries.length === 0 && <p>No entries yet.</p>}
      {entries.map((entry) => (
        <div 
          key={entry.id}
          className="p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-primary-100 shadow-sm hover:shadow-md transition-all duration-300 group"
        >
          <div className="flex justify-between items-center">
            <span className="font-medium text-primary-700">{entry.date}</span>
            <span className="bg-primary-500/10 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
              {entry.calories} kcal
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}