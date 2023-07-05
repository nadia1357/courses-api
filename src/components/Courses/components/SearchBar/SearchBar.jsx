import React from 'react';

import './SearchBar.css';
import { INPUT_TEXT, BUTTON_TEXT } from '../../../../constants';
import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';

export const SearchBar = ({ onChangeSearch }) => {
	let searchValue = '';
	const onChangeInput = (inputValue) => {
		searchValue = inputValue;
	};

	return (
		<div className='searchBar'>
			<Input
				id={''}
				aria-label={INPUT_TEXT.enterCourseName}
				placeholderText={INPUT_TEXT.enterCourseName}
				labelText={''}
				onChangeInput={onChangeInput}
			></Input>
			<Button
				text={BUTTON_TEXT.search}
				onClick={() => onChangeSearch(searchValue)}
			/>
		</div>
	);
};
