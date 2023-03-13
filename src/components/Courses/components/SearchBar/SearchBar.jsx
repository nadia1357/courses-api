import React from 'react';
import './SearchBar.css';
import { INPUT_TEXT, BUTTON_TEXT } from '../../../../constants';
import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';

const SearchBar = ({ onChangeSearch }) => {
	let searchValue = '';
	const onChangeInput = (inputValue) => {
		searchValue = inputValue;
	};

	return (
		<div className='searchBar'>
			<Input
				placeholderText={INPUT_TEXT.enterCourseName}
				labelText={INPUT_TEXT.enterCourseName}
				onChangeInput={onChangeInput}
			></Input>
			<Button
				text={BUTTON_TEXT.search}
				onClick={() => onChangeSearch(searchValue)}
			/>
		</div>
	);
};
export { SearchBar };
