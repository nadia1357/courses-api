import React from 'react';
import './Input.css';

const Input = ({ id, labelText, placeholderText, onChangeInput }) => {
	return (
		<div className='inputBlock'>
			<label className='label' htmlFor={id}>
				{labelText}
			</label>
			<input
				className='input'
				id={id}
				type='text'
				placeholder={placeholderText}
				onChange={(e) => onChangeInput(e.target.value)}
			></input>
		</div>
	);
};

export { Input };
