import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Courses.css';
import { BUTTON_TEXT } from '../../constants';
import { Button } from '../../common/Button/Button';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CourseCard } from './components/CourseCard/CourseCard';
import { Header } from '../Header/Header';
import { getCourses, getAuthors } from '../../selectors';
import { getAllCourses, getAllAuthors } from '../../services';
import { getCoursesFromDB } from '../../store/courses/thunk';
import { addCoursesToState } from '../../store/courses/actionCreators';
import { addAuthorsToState } from '../../store/authors/actionCreators';
import { MOCKED_COURSES_LIST } from '../../constants';

export const Courses = () => {
	let allCourses = [];

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const coursesFromState = useSelector(getCourses);
	const authorsFromState = useSelector(getAuthors);

	dispatch(getCoursesFromDB());

	console.log('coursesFromState', coursesFromState);
	if (coursesFromState.length >= 1) {
		allCourses = coursesFromState.courses;
	} else {
		allCourses = MOCKED_COURSES_LIST;
	}
	console.log('allCourses', allCourses);

	let allAuthorsFromServer = getAllAuthors();
	dispatch(addAuthorsToState(allAuthorsFromServer));
	console.log(`allAuthorsFromServer ${allAuthorsFromServer}`);
	console.log(`authorsFromState ${authorsFromState}`);

	let allAuthors = authorsFromState;
	for (let i = 0; i < coursesFromState.length; i++) {
		let authors = coursesFromState[i].authors.map((author) => {
			allAuthors.forEach((item) => {
				if (item.id === author) {
					author = item.name;
				}
			});
			return author;
		});
		allCourses[i].authorsInString = authors.join(', ');
	}

	const [choosenCourses, setChoosenCourses] = useState(MOCKED_COURSES_LIST);

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
