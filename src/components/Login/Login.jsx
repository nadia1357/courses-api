import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './Login.css';
import { INPUT_TEXT, BUTTON_TEXT } from '../../constants';
import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { Header } from '../Header/Header';
import { loginUser } from '../../services';
import { getUserFromDB } from '../../store/user/thunk';

export const Login = () => {
	const navigate = useNavigate();
	let token = '';

	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	const handleChange = (event) => {
		setForm({
			...form,
			[event.target.id]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const user = {
			password: form.password,
			email: form.email,
		};

		const response = await loginUser(user);
		let result = response.result;
		token = result.slice(result.indexOf(' ') + 1);
		localStorage.setItem('token', token);

		if (localStorage.getItem('token')) {
			getUserFromDB();
			navigate('/courses');
		} else {
			console.log('Try to login again');
			navigate('/login');
		}
	};

	return (
		<div>
			<Header />

			<div className='loginPage'>
				<div className='loginBlock'>
					<h3>Login</h3>

					<form className='loginForm' onSubmit={handleSubmit}>
						<Input
							id={'email'}
							aria-label={INPUT_TEXT.enterEmail}
							placeholderText={INPUT_TEXT.enterEmail}
							labelText={'Email'}
							value={form.email}
							onChangeInput={handleChange}
						></Input>

						<Input
							id={'password'}
							aria-label={INPUT_TEXT.enterPassword}
							placeholderText={INPUT_TEXT.enterPassword}
							labelText={'Password'}
							value={form.password}
							onChangeInput={handleChange}
						></Input>

						<Button text={BUTTON_TEXT.login} />
					</form>

					<p>
						If you do not have an account you can {'  '}
						<Link to={'/register'} className='register'>
							Register
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
