import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './CourseInfo.css';
import { BUTTON_TEXT, COURSE_CARD_MODEL } from '../../constants';
import { Header } from '../Header/Header';
import { getCourses, getAuthors } from '../../selectors';

export const CourseInfo = () => {
	const hour = 60;
	const params = useParams();

	const coursesFromState = useSelector(getCourses);
	const authorsFromState = useSelector(getAuthors);

	let course = coursesFromState.find((item) => item.id === params.id);

	let authors = course.authors.map((author) => {
		authorsFromState.forEach((item) => {
			if (item.id === author) {
				author = item.name;
			}
		});
		return author;
	});

	course.authors = authors;

	return (
		<div>
			<Header />

			<div className='courseInfo'>
				<Link style={{ textDecoration: 'none' }} to='/courses'>
					{BUTTON_TEXT.backToCourses}
				</Link>

				<h2 className='courseInfoH2'>{course.title}</h2>

				<div className='courseBlock'>
					<div className='courseBlockLeft'>
						<p>{course.description}</p>
					</div>

					<div className='courseBlockRight'>
						<p className='courseInfoP'>
							<b>{COURSE_CARD_MODEL.id}: </b>
							<span>{course.id}</span>
						</p>

						<p className='courseInfoP'>
							<b>{COURSE_CARD_MODEL.duration}: </b>
							<span>
								{Math.floor(course.duration / hour)}:{course.duration % hour}{' '}
								hours
							</span>
						</p>

						<p className='courseInfoP'>
							<b>{COURSE_CARD_MODEL.created}: </b>
							<span>{course.creationDate}</span>
						</p>

						<div className='courseInfoAuthors'>
							<p className='courseInfoP'>
								<b>{COURSE_CARD_MODEL.authors}:</b>
							</p>

							<ul className='authorsList'>
								{course.authors.map((author) => (
									<li className='authorsItem' key={author}>
										{author}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
