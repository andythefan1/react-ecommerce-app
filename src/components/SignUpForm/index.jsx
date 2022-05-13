import { useState } from 'react';

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
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<label>Display Name</label>
				<input
					name='displayName'
					onChange={handleChange}
					required
					type='text'
					value={displayName}
				/>

				<label>Email</label>
				<input
					name='email'
					onChange={handleChange}
					required
					type='email'
					value={email}
				/>

				<label>Password</label>
				<input
					name='password'
					onChange={handleChange}
					required
					type='password'
					value={password}
				/>

				<label>Confirm Password</label>
				<input
					name='confirmPassword'
					onChange={handleChange}
					required
					type='password'
					value={confirmPassword}
				/>
				<button type='submit'>Sign up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
