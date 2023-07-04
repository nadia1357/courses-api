import { userActionTypes } from './actionTypes';

export function addUserToStore(name, email, token) {
	const user = {
		isAuth: true,
		name: name,
		email: email,
		token: token,
	};

	return {
		type: userActionTypes.ADD_USER,
		user: user,
	};
}

export function removeUserFromStore() {
	const user = {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	};

	return {
		type: userActionTypes.REMOVE_USER,
		user: user,
	};
}
