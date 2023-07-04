import React from 'react';

import './Button.css';

const Button = ({ text, onClick }) => (
	<button className='Btn' type='submit' onClick={onClick}>
		{text}
	</button>
);

export { Button };
