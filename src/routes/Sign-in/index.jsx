import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
	auth,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
} from '../../utils/firebase/utils';

const SignIn = () => {
	useEffect(() => {
		return async () => {
			const response = await getRedirectResult(auth);
			if (response) {
				const userDocRef = await createUserDocumentFromAuth(response.user);
			}
		};
	}, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
		console.log(userDocRef);
	};

	return (
		<div>
			<h1>Sign-in Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			<button onClick={signInWithGoogleRedirect}>
				Sign in with Google Redirect
			</button>
		</div>
	);
};

export default SignIn;
