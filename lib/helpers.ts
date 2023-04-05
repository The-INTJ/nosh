import { auth, firestore } from './firebase';
import { useEffect, useState } from 'react';
import { doc, collection } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';



export const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};