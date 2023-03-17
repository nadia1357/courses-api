import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './CreateCourse.css';

import {
	BUTTON_TEXT,
	INPUT_TEXT,
	CREATE_COURSE_MODEL,
	MOCKED_COURSES_LIST,
	MOCKED_AUTHORS_LIST,
} from '../../constants';

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { AddAuthor } from './components/AddAuthor/AddAuthor';
import { Duration } from './components/Duration/Duration';
import { Authors } from './components/Authors/Authors';

const CreateCourse = () => {
	const navigate = useNavigate();

	const onChangeInput = () => {};

	return (
		<div className='createCourse'>
			<div className='enterTitleBlock'>
				<Input
					id={CREATE_COURSE_MODEL.title}
					placeholderText={INPUT_TEXT.enterTitle}
					labelText={CREATE_COURSE_MODEL.title}
					onChangeInput={onChangeInput}
				/>
				<Button text={BUTTON_TEXT.createCourse} onclick={() => navigate('')} />
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
				></input>
			</div>

			<div className='authorsBlock'>
				<div className='addAuthorAndDuration'>
					<AddAuthor />
					<Duration />
				</div>

				<Authors />
			</div>
		</div>
	);
};

export { CreateCourse };
