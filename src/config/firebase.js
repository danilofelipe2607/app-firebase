import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyDtOjwmz-u5n1DSRnurC8F0SR5_Ou3_ox8',
  authDomain: 'app-firebase-authenticat-14ad8.firebaseapp.com',
  projectId: 'app-firebase-authenticat-14ad8',
  storageBucket: 'app-firebase-authenticat-14ad8.appspot.com',
  messagingSenderId: '1051874636732',
  appId: '1:1051874636732:web:a8bf7e794798ab5a0771b9',
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;
