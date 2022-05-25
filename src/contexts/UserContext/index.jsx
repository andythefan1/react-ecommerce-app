import { createContext, useState } from 'react';

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
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
