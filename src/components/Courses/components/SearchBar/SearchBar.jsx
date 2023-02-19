import React from 'react';
import './SearchBar.css';
import { BUTTON_TEXT } from '../../../../constants';
import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';

const SearchBar = () => {
	return (
		<SearchBar>
			<Input></Input>
			<Button text={BUTTON_TEXT.search} />
		</SearchBar>
	);
};
export { SearchBar };
