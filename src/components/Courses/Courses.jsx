import React from 'react';
import './Courses.css';

import {
	BUTTON_TEXT,
	MOCKED_COURSES_LIST,
	MOCKED_AUTHORS_LIST,
} from '../../constants';

import { Button } from '../../common/Button/Button';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CourseCard } from './components/CourseCard/CourseCard';

let courses = MOCKED_COURSES_LIST;
for (let i = 0; i < MOCKED_COURSES_LIST.length; i++) {
	let authors = MOCKED_COURSES_LIST[i].authors.map((author) => {
		MOCKED_AUTHORS_LIST.forEach((item) => {
			if (item.id === author) {
				author = item.name;
			}
		});
		return author;
	});
	courses[i].authorsInString = authors.join(', ');
}

const Courses = () => {
	return (
		<div class='courses'>
			<div class='searchNewCourse'>
				<SearchBar />
				<Button text={BUTTON_TEXT.addNewCourse} />
			</div>

			<ul>
				{courses.map((course) => (
					<li key={course.id}>
						<CourseCard course={course} />
					</li>
				))}
			</ul>
		</div>
	);
};

export { Courses };
