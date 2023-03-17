import React from 'react';

import './Authors.css';

import {
	BUTTON_TEXT,
	MOCKED_AUTHORS_LIST,
	CREATE_COURSE_MODEL,
} from '../../../../constants';

import { Button } from '../../../../common/Button/Button';

let allAuthors = MOCKED_AUTHORS_LIST;

const Authors = () => {
	return (
		<div className='allAuthorsBlock'>
			<h4>{CREATE_COURSE_MODEL.authors}</h4>
			<ul className='allAuthors'>
				{allAuthors.map((author) => (
					<li key={author.id}>
						<div className='author'>
							<p>{author.name}</p>
							<Button text={BUTTON_TEXT.addAuthor} onclick={() => {}} />
						</div>
					</li>
				))}
			</ul>
			<h4>{CREATE_COURSE_MODEL.courseAuthors}</h4>
			<p>{CREATE_COURSE_MODEL.authorsListEmpty}</p>
		</div>
	);
};

export { Authors };
