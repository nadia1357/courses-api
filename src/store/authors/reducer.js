const authorsInitialState = [];

export const coursesReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case 'ADD_NEW_AUTHOR': {
			return {
				...state,
				authors: state.authors.push(action.author),
			};
		}

		case 'UPDATE_AUTHOR': {
			const updatedAuthors = state.authors.map((author) => {
				if (author.id === action.author.id) {
					return action.author;
				}
				return author;
			});
			return {
				...state,
				authors: updatedAuthors,
			};
		}

		case 'DELETE_AUTHOR': {
			const updatedAuthors = state.authors.filter(
				(author) => author.id !== action.author.id
			);
			return {
				...state,
				authors: updatedAuthors,
			};
		}

		case 'GET_AUTHORS': {
			return {
				...state,
				authors: action.authors,
			};
		}

		default:
			return state;
	}
};
