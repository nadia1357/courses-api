const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case 'ADD_USER': {
			return {
				...state,
				user: action.user,
			};
		}

		case 'DELETE_USER': {
			return {
				...state,
				user: action.user,
			};
		}

		default:
			return state;
	}
};
