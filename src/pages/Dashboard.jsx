import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import AddEntryForm from '../components/AddEntryForm';
import EntriesList from '../components/EntriesList';
import { supabase } from '../supabaseClient';
import { useAuth } from '../hooks/useAuth';
import { useEntries, totalCalories } from '../hooks/useEntries';
import DashboardHeader from './DashboardHeader';
import DashboardCalories from './DashboardCalories';

export default function Dashboard() {
  const navigate = useNavigate();
  const { checkSession, handleLogout } = useAuth(navigate);
  const { entries, calorieInput, isSubmitting, setCalorieInput, handleAddEntry, loadEntries } = useEntries();

  React.useEffect(() => {
    checkSession();
    loadEntries();
  }, [checkSession, loadEntries]);

  const [prevTotal, setPrevTotal] = useState(0);
  React.useEffect(() => {
    const currentTotal = totalCalories(entries);
    if (currentTotal !== prevTotal) {
      setPrevTotal(currentTotal);
    }
  }, [entries, prevTotal]);

  return (
    <div className="h-full flex flex-col items-center p-4">
      <DashboardHeader handleLogout={handleLogout} />
      <h2 className="text-3xl font-heading mb-6">My Dashboard</h2>
      <AddEntryForm
        calorieInput={calorieInput}
        setCalorieInput={setCalorieInput}
        handleAddEntry={handleAddEntry}
        isSubmitting={isSubmitting}
      />
      <DashboardCalories totalCalories={totalCalories(entries)} prevTotal={prevTotal} entries={entries} />
      <EntriesList entries={entries} />
    </div>
  );
}