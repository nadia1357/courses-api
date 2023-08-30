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

const token = localStorage.getItem('token');

export const getCoursesFromDB = () => {
	return (dispatch) => {
		axios
			.get(URL_COURSES_ALL, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				let allCoursesFromDB = response.data.result;
				console.log(`coursesFromServer ${allCoursesFromDB}`);
				dispatch(addCoursesToState(allCoursesFromDB));
				return allCoursesFromDB;
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

// export const logoutUser = () => {
// 	return (dispatch) => {
// 		axios
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
