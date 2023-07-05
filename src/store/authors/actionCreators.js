import { authorsActionTypes } from './actionTypes';

export const addNewAuthorToState = (newAuthor) => {
	return {
		type: authorsActionTypes.ADD_NEW_AUTHOR,
		author: newAuthor,
	};
};

export const updateAuthorInState = (author) => {
	return {
		type: authorsActionTypes.UPDATE_AUTHOR,
		author: author,
	};
};

export const deleteAuthorInState = (author) => {
	return {
		type: authorsActionTypes.DELETE_AUTHOR,
		author: author,
	};
};

export const addAuthorsToState = (authors) => {
	return {
		type: authorsActionTypes.ADD_AUTHORS_TO_STATE,
		authors: authors,
	};
};
