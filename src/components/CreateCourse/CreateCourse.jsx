import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './CreateCourse.css';
import { BUTTON_TEXT, INPUT_TEXT, CREATE_COURSE_MODEL } from '../../constants';
import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { Header } from '../Header/Header';
import { AddAuthor } from './components/AddAuthor/AddAuthor';
import { Duration } from './components/Duration/Duration';
import { Authors } from './components/Authors/Authors';
import { addCourse, getAllCourses } from '../../services';
import { addNewCourseToState } from '../../store/courses/actionCreators';

export const CreateCourse = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [newAuthor, setNewAuthor] = useState();
	const addNewAuthor = (author) => {
		setNewAuthor((newAuthor) => author);
	};

	const [authors, setAuthors] = useState([]);
	const addAllAuthors = (author) => {
		setAuthors((authors) => authors.push(author));
	};

	const [duration, setDuration] = useState();
	const addDuration = (el) => {
		setDuration((duration) => el);
	};

	const [title, setTitle] = useState('');
	const onChangeInputTitle = (event) => {
		setTitle(event.target.value);
	};

	const [description, setDescription] = useState('');
	const onChangeInputDescription = (event) => {
		setDescription(event.target.value);
	};

	let allAuthorsForNewCourse = [];
	if (newAuthor) {
		allAuthorsForNewCourse = authors.push(newAuthor);
	} else {
		allAuthorsForNewCourse = authors;
	}

	const newCourse = {
		title: title,
		description: description,
		duration: duration,
		authors: allAuthorsForNewCourse,
	};

	const createNewCourse = async () => {
		const response = await addCourse(newCourse);
		if (response.result) {
			const allCoursesFromServer = getAllCourses();
			const newCourseFromServer = allCoursesFromServer.find(
				(course) => course.name === newCourse.name
			); // get new course from server with id
			dispatch(addNewCourseToState(newCourseFromServer));
			navigate('/courses');
		} else {
			alert('Try to create new course again');
			navigate('/courses/add');
		}
	};

	return (
		<div>
			<Header />
			<div className='createCourse'>
				<div className='enterTitleBlock'>
					<Input
						id={CREATE_COURSE_MODEL.title}
						placeholderText={INPUT_TEXT.enterTitle}
						labelText={CREATE_COURSE_MODEL.title}
						onChangeInput={onChangeInputTitle}
					/>
					<Button text={BUTTON_TEXT.createCourse} onclick={createNewCourse} />
				</div>

				<div className='descriptionInputBlock'>
					<label
						className='descriptionLabel'
						htmlFor={CREATE_COURSE_MODEL.description}
					>
						{CREATE_COURSE_MODEL.description}
					</label>
					<input
						id={CREATE_COURSE_MODEL.description}
						className='descriptionInput'
						type='text-area'
						placeholder={INPUT_TEXT.enterDescription}
						onChangeInput={onChangeInputDescription}
					></input>
				</div>

				<div className='authorsBlock'>
					<div className='addAuthorAndDuration'>
						<AddAuthor addNewAuthor={addNewAuthor} />
						<Duration addDuration={addDuration} />
					</div>

					<div className='allAuthors'>
						<Authors addAllAuthors={addAllAuthors} />
					</div>
				</div>
			</div>
		</div>
	);
};
