import React from 'react';

export default function AddEntryForm({ calorieInput, setCalorieInput, handleAddEntry, isSubmitting }) {
  return (
    <form onSubmit={handleAddEntry} className="flex items-center space-x-2 mb-6">
      <input
        type="number"
        placeholder="Enter calories"
        className="box-border p-2 border border-primary-300 rounded-xl focus:outline-none focus:border-primary-500"
        value={calorieInput}
        onChange={(e) => setCalorieInput(e.target.value)}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`cursor-pointer px-4 py-2 rounded-xl transition-all duration-200 text-white font-medium ${
          isSubmitting
            ? 'bg-primary-300'
            : 'bg-primary-500 hover:bg-primary-600'
        }`}
      >
        {isSubmitting ? 'Adding...' : 'Add'}
      </button>
    </form>
  );
}