import React, { useState } from 'react';

import './Duration.css';
import { INPUT_TEXT, CREATE_COURSE_MODEL } from '../../../../constants';
import { Input } from '../../../../common/Input/Input';

export const Duration = ({ addDuration }) => {
	const [duration, setDuration] = useState('');
	const onChangeInput = (event) => {
		setDuration(event.target.value);
		addDuration(duration);
	};

	return (
		<div>
			<div className='durationBlock'>
				<h4>{CREATE_COURSE_MODEL.duration}</h4>
				<Input
					id={CREATE_COURSE_MODEL.duration}
					placeholderText={INPUT_TEXT.enterDuration}
					labelText={CREATE_COURSE_MODEL.duration}
					value={duration}
					onChangeInput={onChangeInput}
				/>
			</div>
			<p className='duration'>{CREATE_COURSE_MODEL.duration}: 00:00 hours</p>
		</div>
	);
};
