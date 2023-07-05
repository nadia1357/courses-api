import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Header.css';
import { Logo } from './components/Logo/Logo.jsx';
import { Button } from '../../common/Button/Button.jsx';
import { BUTTON_TEXT } from '../../constants';
import { getUser } from '../../selectors';
import { removeUserFromState } from '../../store/user/actionCreators';

export const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(getUser);
	const showUserNameAndLogout = user.isAuth;

	const logout = () => {
		localStorage.removeItem('token');
		dispatch(removeUserFromState());
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
