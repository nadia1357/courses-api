import React from 'react';
import './SearchBar.css';
import { INPUT_TEXT, BUTTON_TEXT } from '../../../../constants';
import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';

const SearchBar = () => {
	return (
		<div className='searchBar'>
			<Input placeholderText={INPUT_TEXT.enterCourseName}></Input>
			<Button text={BUTTON_TEXT.search} />
		</div>
	);
};
export { SearchBar };
