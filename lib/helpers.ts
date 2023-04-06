import { auth } from './firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

export const logout = async () => {
  signOut(auth);
}