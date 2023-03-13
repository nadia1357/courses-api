import React from 'react';
import './Input.css';

const Input = ({ labelText, placeholderText, onChangeInput }) => {
	return (
		<input
			id='inputComponent'
			aria-label={labelText}
			type='text'
			name='searchInput'
			placeholder={placeholderText}
			onChange={(e) => onChangeInput(e.target.value)}
		></input>
	);
};

export { Input };
