import React from 'react';

import './AddAuthor.css';

import {
	BUTTON_TEXT,
	INPUT_TEXT,
	CREATE_COURSE_MODEL,
} from '../../../../constants';

import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';

const AddAuthor = () => {
	const onChangeInput = () => {};

	return (
		<div className='addAuthorBlock'>
			<h4>{CREATE_COURSE_MODEL.addAuthor}</h4>
			<Input
				id={CREATE_COURSE_MODEL.addAuthor}
				placeholderText={INPUT_TEXT.enterAuthorName}
				labelText={CREATE_COURSE_MODEL.authorName}
				onChangeInput={onChangeInput}
			/>
			<Button text={BUTTON_TEXT.createAuthor} onclick={() => {}} />
		</div>
	);
};

export { AddAuthor };
