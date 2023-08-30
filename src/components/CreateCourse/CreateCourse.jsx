import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './CreateCourse.css';
import { BUTTON_TEXT, INPUT_TEXT } from '../../constants';
import { CourseForm } from '../CourseForm/CourseForm';
import { addCourse, getAllCourses } from '../../services';
import { addNewCourseToState } from '../../store/courses/actionCreators';

export const CreateCourse = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const createNewCourse = async (newCourse) => {
		const response = await addCourse(newCourse);
		if (response.result) {
			const allCoursesFromServer = getAllCourses();
			const newCourseFromServer = allCoursesFromServer.find(
				(course) => course.name === newCourse.name
			); // get new course from server with id
			dispatch(addNewCourseToState(newCourseFromServer));
			navigate('/courses');
		} else {
			alert('Try to create new course again');
			navigate('/courses/add');
		}
	};

	const propsCourseForm = {
		title: INPUT_TEXT.enterTitle,
		description: INPUT_TEXT.enterDescription,
		duration: INPUT_TEXT.enterDuration,
		btnText: BUTTON_TEXT.createCourse,
		courseAuthors: [],
		btnOnClick: createNewCourse,
	};
	return (
		<div>
			<CourseForm propsCourseForm={propsCourseForm} />
		</div>
	);
};
