import { useCallback } from 'react';
import { supabase } from '../supabaseClient';
import * as Sentry from '@sentry/browser';

export function useAuth(navigate) {
  const checkSession = useCallback(async () => {
    try {
      const { data } = await supabase.auth.getSession();
      if (!data?.session) {
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
    }
  }, [navigate]);

  const handleLogout = useCallback(async () => {
    try {
      await supabase.auth.signOut();
      navigate('/');
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
    }
  }, [navigate]);

  return { checkSession, handleLogout };
}