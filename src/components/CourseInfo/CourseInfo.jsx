import React from 'react';
import { Link, useParams } from 'react-router-dom';

import './CourseInfo.css';
import {
	BUTTON_TEXT,
	MOCKED_COURSES_LIST,
	MOCKED_AUTHORS_LIST,
	COURSE_CARD_MODEL,
} from '../../constants';
import { Header } from '../Header/Header';

const CourseInfo = () => {
	const hour = 60;
	const params = useParams();

	let course = MOCKED_COURSES_LIST.find((item) => item.id === params.id);

	let authors = course.authors.map((author) => {
		MOCKED_AUTHORS_LIST.forEach((item) => {
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

export { CourseInfo };
