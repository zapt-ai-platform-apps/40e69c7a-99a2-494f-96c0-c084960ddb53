import React from 'react';

export default function EntriesList({ entries }) {
  return (
    <div className="mt-6 w-full max-w-md">
      <h4 className="text-2xl font-heading mb-2">Entries</h4>
      {entries.length === 0 && <p>No entries yet.</p>}
      {entries.map((entry) => (
        <div key={entry.id} className="p-2 border-b border-primary-200">
          <span className="mr-2 font-semibold">{entry.date}:</span>
          {entry.calories} kcal
        </div>
      ))}
    </div>
  );
}