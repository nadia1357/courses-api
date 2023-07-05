import { coursesActionTypes } from './actionTypes';

export const addNewCourseToState = (newCourse) => {
	return {
		type: coursesActionTypes.ADD_NEW_COURSE,
		course: newCourse,
	};
};

export const updateCourseInState = (course) => {
	return {
		type: coursesActionTypes.UPDATE_COURSE,
		course: course,
	};
};

export const deleteCourseInState = (course) => {
	return {
		type: coursesActionTypes.DELETE_COURSE,
		course: course,
	};
};

export const addCoursesToState = (courses) => {
	return {
		type: coursesActionTypes.ADD_COURSES_TO_STATE,
		courses: courses,
	};
};
