import { useState } from 'react';

import FormInput from '../FormInput';
import Button from '../Button';
import './styles.scss';

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/utils';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = formFields;

		// verify passwords match
		if (password !== confirmPassword) {
			alert('your provided passwords do no match!');
			return;
		}

		// create the user using firebase authentication
		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			// create a user doc from what	'createAuthUserWithEmailAndPassword()' returns
			// displayName, password is not stored in auth doc, but stored in db
			await createUserDocumentFromAuth(user, { displayName });

			// clear out the form after success
			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('User creation failed: email already in use');
			} else {
				console.error('User creation encountered an error', error);
			}
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
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					name='displayName'
					onChange={handleChange}
					required
					type='text'
					value={displayName}
				/>

				<FormInput
					label='Email'
					name='email'
					onChange={handleChange}
					required
					type='email'
					value={email}
				/>

				<FormInput
					label='Password'
					name='password'
					onChange={handleChange}
					required
					type='password'
					value={password}
				/>

				<FormInput
					label='Confirm Password'
					name='confirmPassword'
					onChange={handleChange}
					required
					type='password'
					value={confirmPassword}
				/>
				<Button type='submit' children='Sign Up' />
			</form>
		</div>
	);
};

export default SignUpForm;
