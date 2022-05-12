import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCz-19WWRvYh7IXlgpSgKKV-ywGNHK9sBc',
	authDomain: 'react-crwn-db-92cb5.firebaseapp.com',
	projectId: 'react-crwn-db-92cb5',
	storageBucket: 'react-crwn-db-92cb5.appspot.com',
	messagingSenderId: '107178064476',
	appId: '1:107178064476:web:1d5c9717938cb366e74499',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
