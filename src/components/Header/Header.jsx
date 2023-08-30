import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Header.css';
import { Logo } from './components/Logo/Logo.jsx';
import { Button } from '../../common/Button/Button.jsx';
import { BUTTON_TEXT } from '../../constants';
import { getUser } from '../../selectors';
import { logoutUser } from '../../store/user/thunk';

export const Header = () => {
	const navigate = useNavigate();
	const user = useSelector(getUser);
	const showUserNameAndLogout = user.isAuth;

	const logout = () => {
		logoutUser();
		localStorage.removeItem('token');
		navigate('/login');
	};

	return (
		<header className='header'>
			<Logo />
			{showUserNameAndLogout && (
				<div className='userNameAndLogout'>
					<div className='userName'>{user.name}</div>
					<Button
						className='logoutBtn'
						text={BUTTON_TEXT.logout}
						onClick={logout}
					/>
				</div>
			)}
		</header>
	);
};
