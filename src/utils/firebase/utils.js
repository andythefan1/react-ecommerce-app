import { initializeApp } from 'firebase/app';
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithRedirect,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';

import {
	collection,
	doc,
	getFirestore,
	getDoc,
	getDocs,
	setDoc,
	query,
	writeBatch,
} from 'firebase/firestore';

// Your web app's Firebase configuration, not sensitive
const firebaseConfig = {
	apiKey: 'AIzaSyCz-19WWRvYh7IXlgpSgKKV-ywGNHK9sBc',
	authDomain: 'react-crwn-db-92cb5.firebaseapp.com',
	projectId: 'react-crwn-db-92cb5',
	storageBucket: 'react-crwn-db-92cb5.appspot.com',
	messagingSenderId: '107178064476',
	appId: '1:107178064476:web:1d5c9717938cb366e74499',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log('done');
};

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	const categoryMap = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
		const { title, items } = docSnapshot.data();
		accumulator[title.toLowerCase()] = items;
		return accumulator;
	}, {});

	return categoryMap;
};

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInfo = {}
) => {
	if (!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfo,
			});
		} catch (error) {
			console.error('error creating the user', error.message);
		}
	}
};

// interface layer functions
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

// returns an observable listener, allows hooking into an event stream
// calls callback whenever authentication state changes
export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);
