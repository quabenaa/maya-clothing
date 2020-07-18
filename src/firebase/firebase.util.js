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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
