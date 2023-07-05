import React from 'react';

import './Button.css';

export const Button = ({ text, onClick }) => (
	<button className='Btn' type='submit' onClick={onClick}>
		{text}
	</button>
);
