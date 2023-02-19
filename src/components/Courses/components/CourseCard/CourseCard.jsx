import React from 'react';
import './CourseCard.css';
import { BUTTON_TEXT, COURSE_CARD_MODEL } from '../../../../constants';
import { Button } from '../../../../common/Button/Button';

const CourseCard = ({ course }) => {
	return (
		<div className='courseCard'>
			<div className='courseDescription'>
				<h3>{course.title}</h3>
				<p>{course.description}</p>
			</div>

			<div className='courseInfo'>
				<p class='overflow-ellipsis'>
					<b>{COURSE_CARD_MODEL.authors}: </b>
					<span>{course.authors}</span>
				</p>
				<p>
					<b>{COURSE_CARD_MODEL.duration}: </b>
					<span>{course.duration} hours</span>
				</p>
				<p>
					<b>{COURSE_CARD_MODEL.created}: </b>
					<span>{course.created}</span>
				</p>
				<Button text={BUTTON_TEXT.showCourse} />
			</div>
		</div>
	);
};

export { CourseCard };
