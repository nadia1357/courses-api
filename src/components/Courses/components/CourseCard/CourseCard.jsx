import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CourseCard.css';
import { BUTTON_TEXT, COURSE_CARD_MODEL } from '../../../../constants';
import { Button } from '../../../../common/Button/Button';
import { getUser } from '../../../../selectors';
import { deleteCourse } from '../../../../services';
import { deleteCourseInState } from '../../../../store/courses/actionCreators';

export const CourseCard = ({ course }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const params = useParams();
	const courseId = params.id;

	const user = useSelector(getUser);
	const hour = 60;

	const deleteChosenCourse = async () => {
		const response = await deleteCourse(courseId);
		if (response.result) {
			dispatch(deleteCourseInState(courseId));
			navigate('/courses');
		} else {
			alert('Try to delete this course again');
			navigate(`/courses/${courseId}`);
		}
	};

	return (
		<div className='courseCard'>
			<div className='courseDescription'>
				<h3 className='courseCardH3'>{course.title}</h3>
				<p className='courseCardP'>{course.description}</p>
			</div>

			<div className='aboutCourse'>
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

				<div className='courseCardButtons'>
					<Button
						text={BUTTON_TEXT.showCourse}
						onClick={() => navigate(`${course.id}`)}
					/>

					{user.role === 'ADMIN' && (
						<Button onClick={() => navigate(`update/${course.id}`)}>
							<FontAwesomeIcon icon='pensil' />
						</Button>
					)}

					{user.role === 'ADMIN' && (
						<Button onClick={deleteChosenCourse}>
							<FontAwesomeIcon icon='trash-can' />
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};
