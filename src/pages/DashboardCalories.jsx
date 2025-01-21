import React, { useState, useEffect } from 'react';

export default function DashboardCalories({ totalCalories, prevTotal, entries }) {
  const [currentPrevTotal, setCurrentPrevTotal] = useState(prevTotal);

  useEffect(() => {
    const newTotal = totalCalories;
    if (newTotal !== currentPrevTotal) {
      setCurrentPrevTotal(newTotal);
    }
  }, [totalCalories, currentPrevTotal]);

  return (
    <div className="bg-secondary-50 p-4 rounded-xl shadow w-full max-w-md transition-all duration-200 hover:shadow-md">
      <h3 className="text-xl font-heading mb-2">Today's Calories</h3>
      <p
        className={`text-3xl font-bold transition-all duration-300 ${
          totalCalories !== currentPrevTotal ? 'premium-hover' : ''
        }`}
      >
        {totalCalories} kcal
      </p>
    </div>
  );
}