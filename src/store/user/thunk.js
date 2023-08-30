import axios from 'axios';

import { addUserToState, removeUserFromState } from './actionCreators';

const URL_LOGOUT = 'http://localhost:4000/logout';
const URL_GET_USER = 'http://localhost:4000/users/me';

const token = localStorage.getItem('token');

export const getUserFromDB = () => {
	return (dispatch) => {
		axios
			.get(URL_GET_USER, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				dispatch(
					addUserToState(
						response.user.name,
						response.user.email,
						response.user.role,
						token
					)
				);
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const logoutUser = () => {
	return (dispatch) => {
		axios
			.delete(URL_LOGOUT, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				dispatch(removeUserFromState());
			})
			.catch((error) => {
				console.log(error);
			});
	};
};
