const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case 'ADD_NEW_COURSE': {
			return {
				...state,
				courses: state.courses.push(action.payload),
			};
		}

		case 'UPDATE_COURSE': {
			const updatedCourses = state.courses.map((course) => {
				if (course.id === action.payload.id) {
					return action.payload;
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
				(course) => course.id !== action.payload.id
			);
			return {
				...state,
				courses: updatedCourses,
			};
		}

		case 'ADD_COURSES_TO_STATE': {
			return {
				...state,
				courses: action.payload,
			};
		}

		default:
			return state;
	}
};
