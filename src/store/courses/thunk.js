import axios from 'axios';

import {
	addNewCourseToState,
	updateCourseInState,
	deleteCourseInState,
	addCoursesToState,
} from './actionCreators';

const URL_COURSES = 'http://localhost:4000/courses';
const URL_COURSES_ALL = 'http://localhost:4000/courses/all';
const URL_COURSES_ADD = 'http://localhost:4000/courses/add';
//const URL_COURSES_FILTER = 'http://localhost:4000/courses/filter';

const token = localStorage.getItem('token');

export const getCoursesFromDB = () => (dispatch) => {
	return axios
		.get(URL_COURSES_ALL, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => {
			console.log('result', response.data.result);
			return dispatch(addCoursesToState(response.data.result));
		})
		.catch((error) => {
			console.log(error);
		});
};

// export const logoutUser = () => {
// 	return (dispatch) => {
// 		return axios
// 			.delete(URL_LOGOUT, {
// 				headers: { Authorization: `Bearer ${token}` },
// 			})
// 			.then((response) => {
// 				dispatch(removeUserFromState());
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	};
// };
