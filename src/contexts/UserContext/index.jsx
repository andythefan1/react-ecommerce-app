import { createContext, useEffect, useReducer } from 'react';
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from '../../utils/firebase/utils';

const USER_ACTION_TYPES = {
	SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const INITIAL_USER_STATE = {
	currentUser: null,
};

const INITIAL_USER_CONTEXT = {
	currentUser: null,
	setCurrentUser: () => null,
};

const userReducer = (state, action) => {
	const { type, payload } = action;
	switch (action.type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER: {
			return { ...state, currentUser: payload };
		}
		default: {
			throw new Error(`Unhandled type ${type} in userReducer()`);
		}
	}
};

// allow all children of provider to access and set user state
export const UserContext = createContext(INITIAL_USER_CONTEXT);

// provides user context to children components
// instead of having components call dispatch, provide setter function
export const UserProvider = ({ children }) => {
	const [{ currentUser }, dispatch] = useReducer(
		userReducer,
		INITIAL_USER_STATE
	);

	const setCurrentUser = (user) => {
		dispatch({
			type: USER_ACTION_TYPES.SET_CURRENT_USER,
			payload: user,
		});
	};

	const userContext = { currentUser, setCurrentUser };

	useEffect(() => {
		// delete this listener when this component unmounts, otherwise can cause memory leak
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});

		// clean up user subscription
		return unsubscribe;
	}, []);

	return (
		<UserContext.Provider value={userContext}>{children}</UserContext.Provider>
	);
};
