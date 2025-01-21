import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import AddEntryForm from '../components/AddEntryForm';
import EntriesList from '../components/EntriesList';
import { supabase } from '../supabaseClient';
import { useAuth } from '../hooks/useAuth';
import { useEntries, totalCalories } from '../hooks/useEntries';

export default function Dashboard() {
  const navigate = useNavigate();
  const { checkSession, handleLogout } = useAuth(navigate);
  const { entries, calorieInput, isSubmitting, setCalorieInput, handleAddEntry, loadEntries } = useEntries();

  React.useEffect(() => {
    checkSession();
    loadEntries();
  }, [checkSession, loadEntries]);

  // Micro-animation for calorie total changes (optional, minimal demonstration)
  const [prevTotal, setPrevTotal] = useState(0);
  React.useEffect(() => {
    const currentTotal = totalCalories(entries);
    if (currentTotal !== prevTotal) {
      setPrevTotal(currentTotal);
    }
  }, [entries, prevTotal]);

  return (
    <div className="h-full flex flex-col items-center p-4">
      <div className="flex justify-end w-full max-w-md mb-4">
        <button 
          onClick={handleLogout} 
          className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl font-medium shadow transition-all duration-200"
        >
          Sign Out
        </button>
      </div>
      <h2 className="text-3xl font-heading mb-6">My Dashboard</h2>
      <AddEntryForm
        calorieInput={calorieInput}
        setCalorieInput={setCalorieInput}
        handleAddEntry={handleAddEntry}
        isSubmitting={isSubmitting}
      />
      <div className="bg-secondary-50 p-4 rounded-xl shadow w-full max-w-md transition-all duration-200 hover:shadow-md">
        <h3 className="text-xl font-heading mb-2">Today's Calories</h3>
        <p
          className={`text-3xl font-bold transition-all duration-300 ${
            (totalCalories(entries) !== prevTotal) ? 'premium-hover' : ''
          }`}
        >
          {totalCalories(entries)} kcal
        </p>
      </div>
      <EntriesList entries={entries} />
    </div>
  );
}