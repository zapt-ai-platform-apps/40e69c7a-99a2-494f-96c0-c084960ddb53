import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import AddEntryForm from '../components/AddEntryForm';
import EntriesList from '../components/EntriesList';

export default function Dashboard() {
  const navigate = useNavigate();
  const [calorieInput, setCalorieInput] = useState('');
  const [entries, setEntries] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    try {
      console.log('[Dashboard] Loading existing entries');
      const storedEntries = JSON.parse(localStorage.getItem('calorieEntries') || '[]');
      setEntries(storedEntries);
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
    }
  }, [navigate]);

  function totalCalories() {
    return entries.reduce((acc, entry) => acc + entry.calories, 0);
  }

  async function handleAddEntry(e) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      console.log('[Dashboard] Adding new entry');
      const newEntry = {
        id: Date.now(),
        calories: parseInt(calorieInput, 10) || 0,
        date: new Date().toLocaleDateString(),
      };
      const updatedEntries = [...entries, newEntry];
      setEntries(updatedEntries);
      localStorage.setItem('calorieEntries', JSON.stringify(updatedEntries));
      setCalorieInput('');
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="h-full flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">My Dashboard</h2>
      <AddEntryForm 
        calorieInput={calorieInput} 
        setCalorieInput={setCalorieInput} 
        handleAddEntry={handleAddEntry} 
        isSubmitting={isSubmitting} 
      />
      <div className="bg-white p-4 rounded shadow w-full max-w-md">
        <h3 className="text-xl font-semibold mb-2">Today's Calories</h3>
        <p className="text-2xl font-bold">{totalCalories()} kcal</p>
      </div>
      <EntriesList entries={entries} />
    </div>
  );
}