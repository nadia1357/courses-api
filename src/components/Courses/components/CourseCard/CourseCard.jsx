import React from 'react';
import './CourseCard.css';
import { BUTTON_TEXT, COURSE_CARD_MODEL } from '../../../../constants';
import { Button } from '../../../../common/Button/Button';

const CourseCard = ({ course }) => {
	const hour = 60;
	return (
		<div className='courseCard'>
			<div className='courseDescription'>
				<h3 className='courseCardH3'>{course.title}</h3>
				<p className='courseCardP'>{course.description}</p>
			</div>

			<div className='courseInfo'>
				<p className='overflow-ellipsis courseCardP'>
					<b>{COURSE_CARD_MODEL.authors}: </b>
					<span>{course.authorsInString}</span>
				</p>

				<p className='courseCardP'>
					<b>{COURSE_CARD_MODEL.duration}: </b>
					<span>
						{Math.floor(course.duration / hour)}:{course.duration % hour} hours
					</span>
				</p>

				<p className='courseCardP'>
					<b>{COURSE_CARD_MODEL.created}: </b>
					<span>{course.creationDate}</span>
				</p>

				<Button text={BUTTON_TEXT.showCourse} />
			</div>
		</div>
	);
};

export { CourseCard };
