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
import { addCoursesToState } from '../../store/courses/actionCreators';
import { addAuthorsToState } from '../../store/authors/actionCreators';

export const Courses = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const allCoursesFromServer = getAllCourses();
	dispatch(addCoursesToState(allCoursesFromServer));

	const allAuthorsFromServer = getAllAuthors();
	dispatch(addAuthorsToState(allAuthorsFromServer));

	const coursesFromState = useSelector(getCourses);
	const authorsFromState = useSelector(getAuthors);

	let allCourses = coursesFromState;
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
