import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './UpdateCourse.css';
import { BUTTON_TEXT } from '../../constants';
import { CourseForm } from '../CourseForm/CourseForm';
import { updateCourse, getAllCourses, getCourseById } from '../../services';
import { updateCourseInState } from '../../store/courses/actionCreators';

export const UpdateCourse = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const params = useParams();
	const courseId = params.id;

	const course = getCourseById(courseId);

	const updateChosenCourse = async (updatedCourse) => {
		const response = await updateCourse(updatedCourse);
		if (response.result) {
			const allCoursesFromServer = getAllCourses();
			const updatedCourseFromServer = allCoursesFromServer.find(
				(course) => course.id === updatedCourse.id
			); // get updated course from server by its id
			dispatch(updateCourseInState(updatedCourseFromServer));
			navigate('/courses');
		} else {
			alert('Try to update this course again');
			navigate(`/courses/update/${updatedCourse.id}`);
		}
	};

	const propsCourseForm = {
		title: course.title,
		description: course.description,
		duration: course.duration,
		btnText: BUTTON_TEXT.createCourse,
		courseAuthors: course.authors,
		btnOnClick: updateChosenCourse,
	};

	return (
		<div>
			<CourseForm propsCourseForm={propsCourseForm} />
		</div>
	);
};
