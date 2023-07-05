import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './AddAuthor.css';
import {
	BUTTON_TEXT,
	INPUT_TEXT,
	CREATE_COURSE_MODEL,
} from '../../../../constants';
import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';
import { addAuthor, getAllAuthors } from '../../../../services';
import { addNewAuthorToState } from '../../../../store/authors/actionCreators';

export const AddAuthor = ({ addNewAuthor }) => {
	const dispatch = useDispatch();

	const [form, setForm] = useState({
		newAuthor: '',
	});

	const handleChange = (event) => {
		setForm({
			...form,
			[event.target.id]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const newAuthor = { name: form.newAuthor };
		const response = await addAuthor(newAuthor);
		if (response.result) {
			const allAuthorsFromServer = getAllAuthors();
			const newAuthorFromServer = allAuthorsFromServer.find(
				(author) => author.name === newAuthor
			); // get new author from server with id
			dispatch(addNewAuthorToState(newAuthorFromServer));
			addNewAuthor(newAuthorFromServer);
		} else {
			alert('Try to add new author again');
		}
	};

	return (
		<div className='addAuthorBlock'>
			<h4>{CREATE_COURSE_MODEL.addAuthor}</h4>

			<form className='addAuthorForm' onSubmit={handleSubmit}>
				<Input
					id={CREATE_COURSE_MODEL.addAuthor}
					placeholderText={INPUT_TEXT.enterAuthorName}
					labelText={CREATE_COURSE_MODEL.authorName}
					value={addNewAuthor}
					onChangeInput={handleChange}
				/>
				<Button text={BUTTON_TEXT.createAuthor} />
			</form>
		</div>
	);
};
