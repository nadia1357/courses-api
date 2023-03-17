import React from 'react';

import './Duration.css';

import { INPUT_TEXT, CREATE_COURSE_MODEL } from '../../../../constants';

import { Input } from '../../../../common/Input/Input';

const Duration = () => {
	const onChangeInput = () => {};

	return (
		<div>
			<div className='durationBlock'>
				<h4>{CREATE_COURSE_MODEL.duration}</h4>
				<Input
					id={CREATE_COURSE_MODEL.duration}
					placeholderText={INPUT_TEXT.enterDuration}
					labelText={CREATE_COURSE_MODEL.duration}
					onChangeInput={onChangeInput}
				/>
			</div>
			<p className='duration'>{CREATE_COURSE_MODEL.duration}: 00:00 hours</p>
		</div>
	);
};

export { Duration };
