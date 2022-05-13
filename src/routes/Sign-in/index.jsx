import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
} from '../../utils/firebase/utils';

import SignUpForm from '../../components/SignUpForm';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
		console.log(userDocRef);
	};

	return (
		<div>
			<h1>Sign-in Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
