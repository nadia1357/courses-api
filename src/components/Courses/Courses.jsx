import React from 'react';
import './Courses.css';
import { BUTTON_TEXT } from '../../constants';
import { Button } from '../../common/Button/Button';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CourseCard } from './components/CourseCard/CourseCard';

const Courses = () => {
	return (
		<Courses>
			<div>
				<SearchBar />
				<Button text={BUTTON_TEXT.addNewCourse} />
			</div>
			<CourseCard />
		</Courses>
	);
};

export { Courses };
