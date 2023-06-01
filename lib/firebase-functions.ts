import { getDocs, collection, doc, getDoc, setDoc, DocumentData } from 'firebase/firestore';
import { auth, firestore } from './firebase';
import { BookProps } from '@definitions/props';
import { hymnalNames, HymnalAccessData } from '@definitions/data';
import { User, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';

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

export const createUser = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error };
    }
  };

export async function unlockSelectedHymnal(bookTitle: string, user: User | null | undefined,) {
    /* aquire user id */
    if (user?.email) {
        console.log(user.email)

        const docRef = doc(firestore, "users", user.email.toString(), "userData", "hymnalAccess");
        const docSnap = await getDoc(docRef);
        let localData: DocumentData;

        if (docSnap.exists()) {
            localData = docSnap.data();
            console.log(localData)
            const interpName = getMappingBetweenHymnals(bookTitle);
            localData[interpName] = true;
            console.log(localData)
            await setDoc(doc(firestore, "users", user.email.toString(), "userData", "hymnalAccess"), localData);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
}

export async function lockSelectedHymnals(hymnals: BookProps[], user: User | null,) {
    /* aquire user id */
    if (user?.email != null) {

        const docRef = doc(firestore, "users", user.email, "userData", "hymnalAccess");
        const docSnap = await getDoc(docRef);
        let localData: DocumentData;

        if (docSnap.exists()) {
            localData = docSnap.data();
            hymnals.forEach(hymnal => {
                const interpName = getMappingBetweenHymnals(hymnal.title);
                localData[interpName] = false;
            })
            await setDoc(doc(firestore, "users", user.email.toString(), "userData", "hymnalAccess"), localData);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
}

export async function getBookPurchases(user: User | null | undefined): Promise<{ title: string, purchased: boolean }[]> {
    if (user?.email) {

        const docRef = doc(firestore, "users", user.email.toString(), "userData", "hymnalAccess");
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return [];
        }

        const hymnalAccessData = docSnap.data() as HymnalAccessData;

        return hymnalNames.map(hymnalName => ({
            title: hymnalName,
            purchased: hymnalAccessData[getMappingBetweenHymnals(hymnalName)] ?? false
        }));
    }
    return [];
}

/* Helper Functions */

function getMappingBetweenHymnals(hymnalName: string) {
    switch (hymnalName) {
        case hymnalNames[0]:
            return "SOZ";
        case hymnalNames[1]:
            return "ECS";
        case hymnalNames[2]:
            return "OSH12";
        case hymnalNames[3]:
            return "OSH100";
        case hymnalNames[4]:
            return "WTK";
        case hymnalNames[5]:
            return "PBH";
        default:
            return "-1";
    }
}