import { createContext, useEffect, useState } from 'react';
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from '../../utils/firebase/utils';

// Storage for user
// pass in 'default' value (the actual value you want to access), not initial value
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

// Determines which components have access to above context
// Provider allows any of its child components to access its values (useState())
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = {
		currentUser,
		setCurrentUser,
	};

	// only run on mount
	useEffect(() => {
		// delete this listener when this component unmounts, otherwise can cause memory leak
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});

		// useEffect will run whatever is returned when this component unmounts
		return unsubscribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
