import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Courses.css';
import {
	BUTTON_TEXT,
	MOCKED_COURSES_LIST,
	MOCKED_AUTHORS_LIST,
} from '../../constants';
import { Button } from '../../common/Button/Button';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CourseCard } from './components/CourseCard/CourseCard';
import { Header } from '../Header/Header';

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
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [choosenCourses, setChoosenCourses] = useState(allCourses);

	const showChoosenCourses = (choosenCourses) => {
		setChoosenCourses(choosenCourses);
	};

	const onChangeSearch = (searchValue) => {
		let searchedCourses = allCourses;
		if (searchValue !== '') {
			searchedCourses = searchedCourses.filter(
				(x) =>
					x.title.toLowerCase().includes(searchValue.toLowerCase()) ||
					x.id.toLowerCase().includes(searchValue.toLowerCase())
			);
		}
		showChoosenCourses(searchedCourses);
	};

	return (
		<div>
			<Header />
			<div className='courses'>
				<div className='searchNewCourse'>
					<SearchBar onChangeSearch={onChangeSearch} />
					<div>
						<Button
							text={BUTTON_TEXT.addNewCourse}
							onClick={() => navigate('add')}
						/>
					</div>
				</div>

				<ul className='coursesCards'>
					{choosenCourses.map((course) => (
						<li className='coursesCard' key={course.id}>
							<CourseCard course={course} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export { Courses };
