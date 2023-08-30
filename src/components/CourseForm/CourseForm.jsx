import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './CourseForm.css';
import { CREATE_COURSE_MODEL } from '../../constants';
import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { Header } from '../Header/Header';
import { AddAuthor } from './components/AddAuthor/AddAuthor';
import { Duration } from './components/Duration/Duration';
import { Authors } from './components/Authors/Authors';

export const CourseForm = (propsCourseForm) => {
	const params = useParams();
	let courseId = '';
	if (params.id) {
		courseId = params.id;
	}

	const [newAuthor, setNewAuthor] = useState();
	const addNewAuthor = (author) => {
		setNewAuthor((newAuthor) => author);
	};

	const [authors, setAuthors] = useState(propsCourseForm.courseAuthors);
	const addAllAuthors = (author) => {
		setAuthors((authors) => authors.push(author));
	};

	const deleteChosenAuthor = (authorsWithoutDeleted) => {
		setAuthors((authors) => authorsWithoutDeleted);
	};

	const [duration, setDuration] = useState(propsCourseForm.duration);
	const addDuration = (el) => {
		setDuration((duration) => el);
	};

	const [title, setTitle] = useState(propsCourseForm.title);
	const onChangeInputTitle = (event) => {
		setTitle(event.target.value);
	};

	const [description, setDescription] = useState(propsCourseForm.description);
	const onChangeInputDescription = (event) => {
		setDescription(event.target.value);
	};

	let allAuthorsForNewCourse = propsCourseForm.courseAuthors;
	if (newAuthor) {
		allAuthorsForNewCourse = authors.push(newAuthor);
	} else {
		allAuthorsForNewCourse = authors;
	}

	const newCourse = {
		title: title,
		id: courseId,
		description: description,
		duration: duration,
		authors: allAuthorsForNewCourse,
	};

	return (
		<div>
			<Header />
			<div className='createCourse'>
				<div className='enterTitleBlock'>
					<Input
						id={CREATE_COURSE_MODEL.title}
						placeholderText={propsCourseForm.title}
						labelText={CREATE_COURSE_MODEL.title}
						onChangeInput={onChangeInputTitle}
					/>
					<Button
						text={propsCourseForm.btnText}
						onclick={propsCourseForm.btnOnClick(newCourse)}
					/>
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
						placeholder={propsCourseForm.description}
						onChangeInput={onChangeInputDescription}
					></input>
				</div>

				<div className='authorsBlock'>
					<div className='addAuthorAndDuration'>
						<AddAuthor addNewAuthor={addNewAuthor} />
						<Duration addDuration={addDuration} />
					</div>

					<div className='allAuthors'>
						<Authors
							addAllAuthors={addAllAuthors}
							deleteChosenAuthor={deleteChosenAuthor}
							courseAuthors={allAuthorsForNewCourse}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
