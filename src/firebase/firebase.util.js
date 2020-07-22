import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAELbXi7BP-ElipOIjFAGZ_VsrSdq620oI',
  authDomain: 'maya-clthn-db.firebaseapp.com',
  databaseURL: 'https://maya-clthn-db.firebaseio.com',
  projectId: 'maya-clthn-db',
  storageBucket: 'maya-clthn-db.appspot.com',
  messagingSenderId: '966893272797',
  appId: '1:966893272797:web:4e89f1ba86330e94bae534',
  measurementId: 'G-BE24DWYFJF',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return false;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating the user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
