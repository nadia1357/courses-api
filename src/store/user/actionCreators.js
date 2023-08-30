import { userActionTypes } from './actionTypes';

export const addUserToState = (name, email, role, token) => {
	const user = {
		isAuth: true,
		name: name,
		email: email,
		role: role,
		token: token,
	};

	return {
		type: userActionTypes.ADD_USER,
		payload: { user: user },
	};
};

export const removeUserFromState = () => {
	const user = {
		isAuth: false,
		name: '',
		email: '',
		role: '',
		token: '',
	};

	return {
		type: userActionTypes.REMOVE_USER,
		payload: { user: user },
	};
};
