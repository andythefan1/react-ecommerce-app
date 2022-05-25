import { useContext, useState } from 'react';

import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/utils';

import { UserContext } from '../../contexts/UserContext';
import './styles.scss';
import FormInput from '../FormInput';
import Button from '../Button';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const { setCurrentUser } = useContext(UserContext);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = formFields;

		// create the user using firebase authentication
		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			// store the current user in the UserContext
			setCurrentUser(user);

			// clear out the form after success
			resetFormFields();
		} catch (error) {
			let message = '';
			switch (error.code) {
				case 'auth/user-not-found':
					message =
						'Provided email does not have an account. Please try again.';
					break;
				case 'auth/wrong-password':
					message = 'Provided password is incorrect. Please try again.';
					break;
				default:
					message = 'User sign in encountered an error';
			}

			alert(message);
			console.error('User sign in encountered an error', error);
		}
	};

	// we want this handler to be generic to handle any input
	const handleChange = (event) => {
		const { name, value } = event.target;

		// only want to change the field that was updated
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-up-container'>
			<h2>I already have an account</h2>
			<span>Sign in with your existing email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					name='email'
					onChange={handleChange}
					required
					type='text'
					value={email}
				/>
				<FormInput
					label='Password'
					name='password'
					onChange={handleChange}
					type='password'
					value={password}
				/>
			</form>
			<div className='buttons-container'>
				<Button children='Sign in' onClick={handleSubmit} type='submit' />
				<Button
					buttonType='google'
					children='Google Sign in'
					onClick={signInWithGoogle}
					type='button'
				/>
			</div>
		</div>
	);
};

export default SignInForm;
