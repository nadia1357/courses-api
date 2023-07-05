const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case 'ADD_NEW_COURSE': {
			return {
				...state,
				courses: state.courses.push(action.course),
			};
		}

		case 'UPDATE_COURSE': {
			const updatedCourses = state.courses.map((course) => {
				if (course.id === action.course.id) {
					return action.course;
				}
				return course;
			});
			return {
				...state,
				courses: updatedCourses,
			};
		}

		case 'DELETE_COURSE': {
			const updatedCourses = state.courses.filter(
				(course) => course.id !== action.course.id
			);
			return {
				...state,
				courses: updatedCourses,
			};
		}

		case 'GET_COURSES': {
			return {
				...state,
				courses: action.courses,
			};
		}

		default:
			return state;
	}
};
