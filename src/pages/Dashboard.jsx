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
  }, [checkSession]);

  return (
    <div className="h-full flex flex-col items-center p-4">
      <div className="flex justify-end w-full max-w-md">
        <button 
          onClick={handleLogout} 
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium shadow transition-all duration-200"
        >
          Sign Out
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4">My Dashboard</h2>
      <AddEntryForm 
        calorieInput={calorieInput} 
        setCalorieInput={setCalorieInput} 
        handleAddEntry={handleAddEntry} 
        isSubmitting={isSubmitting} 
      />
      <div className="bg-white p-4 rounded shadow w-full max-w-md">
        <h3 className="text-xl font-semibold mb-2">Today's Calories</h3>
        <p className="text-2xl font-bold">{totalCalories(entries)} kcal</p>
      </div>
      <EntriesList entries={entries} />
    </div>
  );
}