import React from 'react';

export default function AddEntryForm({ calorieInput, setCalorieInput, handleAddEntry, isSubmitting }) {
  return (
    <form onSubmit={handleAddEntry} className="mb-6 w-full max-w-md">
      <div className="relative group">
        <input
          type="number"
          placeholder="Enter calories"
          className="w-full px-6 py-4 bg-primary-50/50 backdrop-blur-sm rounded-2xl border-2 border-primary-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-200/50 shadow-sm transition-all duration-300 placeholder:text-primary-400 focus:shadow-lg box-border"
          value={calorieInput}
          onChange={(e) => setCalorieInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="absolute right-2 top-2 bottom-2 px-8 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
        >
          {isSubmitting ? 'Adding...' : 'Add'}
        </button>
      </div>
    </form>
  );
}