import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
} from '../../utils/firebase/utils';

import SignUpForm from '../../components/SignUpForm';
import Button from '../../components/Button';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
		console.log(userDocRef);
	};

	return (
		<div>
			<h1>Sign-in Page</h1>
			<Button
				buttonType='google'
				children='Sign in with Google Popup'
				onClick={logGoogleUser}
			/>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
