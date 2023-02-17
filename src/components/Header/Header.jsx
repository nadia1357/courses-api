import React from 'react';
import './Header.css';
import { Logo } from './components/Logo/Logo.jsx';
import { Button } from '../../common/Button/Button.jsx';
import { BUTTON_TEXT } from '../../constants';

const Header = () => {
	return (
		<header className='header'>
			<Logo />
			<div className='userNameAndLogout'>
				<div className='userName'>User Name</div>
				<Button text={BUTTON_TEXT.logout} />
			</div>
		</header>
	);
};

export { Header };
