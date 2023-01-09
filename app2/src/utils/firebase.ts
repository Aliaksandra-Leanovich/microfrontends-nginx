import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: environment.firebase.appiKey,
  authDomain: environment.firebase.authDomain,
  projectId: environment.firebase.projectId,
  storageBucket: environment.firebase.storageBucket,
  messagingSenderId: environment.firebase.messengerSenderId,
  appId: environment.firebase.appId,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);
