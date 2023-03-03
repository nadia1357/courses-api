import React from 'react';
import './Input.css';

const Input = ({ placeholderText, onChange }) => {
	return <input placeholder={placeholderText} onChange={onChange}></input>;
};

export { Input };
