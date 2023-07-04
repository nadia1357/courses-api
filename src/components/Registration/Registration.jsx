import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './Registration.css';
import { INPUT_TEXT, BUTTON_TEXT } from '../../constants';
import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { Header } from '../Header/Header';
import { registerUser } from '../../services';

const Registration = () => {
	const navigate = useNavigate();

	const [data, setData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const handleChange = (event) => {
		setData({
			...data,
			[event.target.id]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const newUser = {
			name: data.name,
			email: data.email,
			password: data.password,
		};

		const result = await registerUser(newUser);
		if (result) {
			navigate('/login');
		} else {
			navigate('/register');
		}
	};

	return (
		<div>
			<Header />

			<div className='regPage'>
				<div className='regBlock'>
					<h3>Registration</h3>

					<form className='regForm' onSubmit={handleSubmit}>
						<Input
							id={'name'}
							aria-label={INPUT_TEXT.enterName}
							placeholderText={INPUT_TEXT.enterName}
							labelText={'Name'}
							value={data.name}
							onChangeInput={handleChange}
						></Input>

						<Input
							id={'email'}
							aria-label={INPUT_TEXT.enterEmail}
							placeholderText={INPUT_TEXT.enterEmail}
							labelText={'Email'}
							value={data.email}
							onChangeInput={handleChange}
						></Input>

						<Input
							id={'password'}
							aria-label={INPUT_TEXT.enterPassword}
							placeholderText={INPUT_TEXT.enterPassword}
							labelText={'Password'}
							value={data.password}
							onChangeInput={handleChange}
						></Input>

						<Button text={BUTTON_TEXT.register} />
					</form>

					<p>
						If you have an account you can{' '}
						<Link to={'/login'} className='login'>
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export { Registration };
