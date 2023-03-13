import React, { useState } from 'react';
import './Courses.css';

import {
	BUTTON_TEXT,
	MOCKED_COURSES_LIST,
	MOCKED_AUTHORS_LIST,
} from '../../constants';

import { Button } from '../../common/Button/Button';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CourseCard } from './components/CourseCard/CourseCard';

let allCourses = MOCKED_COURSES_LIST;
for (let i = 0; i < MOCKED_COURSES_LIST.length; i++) {
	let authors = MOCKED_COURSES_LIST[i].authors.map((author) => {
		MOCKED_AUTHORS_LIST.forEach((item) => {
			if (item.id === author) {
				author = item.name;
			}
		});
		return author;
	});
	allCourses[i].authorsInString = authors.join(', ');
}

const Courses = () => {
	const [choosenCourses, setChoosenCourses] = useState(allCourses);

	const showChoosenCourses = (choosenCourses) => {
		setChoosenCourses(choosenCourses);
	};

	const onChangeSearch = (searchValue) => {
		console.log(searchValue);
		let searchedCourses = allCourses;
		if (searchValue !== '') {
			searchedCourses = searchedCourses.filter(
				(x) =>
					x.title.toLowerCase().includes(searchValue.toLowerCase()) ||
					x.id.toLowerCase().includes(searchValue.toLowerCase())
			);
		}
		console.log(searchedCourses);
		showChoosenCourses(searchedCourses);
	};

	return (
		<div className='courses'>
			<div className='searchNewCourse'>
				<SearchBar onChangeSearch={onChangeSearch} />
				<div>
					<Button text={BUTTON_TEXT.addNewCourse} />
				</div>
			</div>

			<ul className='coursesCards'>
				{choosenCourses.map((course) => (
					<li key={course.id}>
						<CourseCard course={course} />
					</li>
				))}
			</ul>
		</div>
	);
};

export { Courses };
