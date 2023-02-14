import React from 'react';
import './Header.css';
import { Logo } from './components/Logo/Logo.jsx';
import { Button } from '../../common/Button/Button.jsx';

const Header = () => {
	return (
		<header>
			<Logo />
			<div className='userNameAndLogout'>
				<p>User Name</p>
				<Button />
			</div>
		</header>
	);
};

export { Header };
