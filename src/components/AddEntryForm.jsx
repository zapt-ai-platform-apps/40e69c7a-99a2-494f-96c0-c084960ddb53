import React from 'react';

export default function AddEntryForm({ calorieInput, setCalorieInput, handleAddEntry, isSubmitting }) {
  return (
    <form onSubmit={handleAddEntry} className="flex items-center space-x-2 mb-6">
      <input
        type="number"
        placeholder="Enter calories"
        className="box-border p-2 border rounded"
        value={calorieInput}
        onChange={(e) => setCalorieInput(e.target.value)}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-all duration-200"
      >
        {isSubmitting ? 'Adding...' : 'Add'}
      </button>
    </form>
  );
}