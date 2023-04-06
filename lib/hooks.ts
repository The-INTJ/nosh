'use client'
import { auth, firestore } from './firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection } from 'firebase/firestore';

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const ref = collection(firestore, "Users");
      // console.log("ref" + ref); // add listener here
      setUsername(user.email || '');
    }

    return unsubscribe;
  }, [user]);

  return { user, username };
}