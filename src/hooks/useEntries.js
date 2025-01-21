import { useState, useCallback } from 'react';
import * as Sentry from '@sentry/browser';

export function useEntries() {
  const [calorieInput, setCalorieInput] = useState('');
  const [entries, setEntries] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadEntries = useCallback(() => {
    try {
      console.log('[useEntries] Loading existing entries');
      const storedEntries = JSON.parse(localStorage.getItem('calorieEntries') || '[]');
      setEntries(storedEntries);
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
    }
  }, []);

  const handleAddEntry = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      console.log('[useEntries] Adding new entry');
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
  }, [calorieInput, entries]);

  return { calorieInput, setCalorieInput, entries, isSubmitting, handleAddEntry, loadEntries };
}

export function totalCalories(entries) {
  return entries.reduce((acc, entry) => acc + entry.calories, 0);
}