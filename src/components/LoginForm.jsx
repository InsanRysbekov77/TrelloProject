import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

const TrelloForm = () => {
	const [enteredEmail, setEnteredEmail] = useState('')
	const [enteredPassword, setEnteredPassword] = useState('')
	const [enteredEmailTouched, setenteredEmailTouched] = useState(false)
	const [enteredPasswordTouched, setenteredPasswordTouched] = useState(false)
	const navigate = useNavigate()
	const enteredEmailIsValid = enteredEmail.trim() === ''
	const emailInputIsInValid = enteredEmailIsValid && enteredEmailTouched
	const enteredPasswordIsValid = enteredPassword.trim() === ''
	const passwordInputIsInValid =
		enteredPasswordIsValid && enteredPasswordTouched

	let formIsValid = false
	if (enteredEmailIsValid || enteredPasswordIsValid) {
		formIsValid = true
	}
	const emailBlurHandler = () => {
		setenteredEmailTouched(true)
	}
	const passwordBlurHandler = () => {
		setenteredPasswordTouched(true)
	}
	const enteredEmailHandler = (e) => {
		setEnteredEmail(e.target.value)
	}
	const enteredPasswordHandler = (e) => {
		setEnteredPassword(e.target.value)
	}

	const state = useSelector((state) => state.pass)
	console.log(state)

	const onSubmitHandler = (e) => {
		e.preventDefault()
		state.map((user) => {
			if (
				user.email === enteredEmail &&
				user.password === enteredPassword
			) {
				return navigate('/TodoList')
			}
		})
		if (!enteredEmailIsValid && !enteredPasswordIsValid) return
	}
	const emailInputClass = !emailInputIsInValid
		? 'form-control'
		: 'form-control invalid'
	const passwordInputClass = !passwordInputIsInValid
		? 'form-control'
		: 'form-control invalid'
	return (
		<>
		<GlobalStyle />
		<Logo>
				<img
					src='https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg'
					alt='trello-logo'
				/>
		</Logo>
		  <MaxGlobal>
			<Wrapper>
				<h3>Выход в Trello</h3>
				<form onSubmit={onSubmitHandler} action='#'>
					<div className={emailInputClass}>
						<input
							type='email'
							id='email'
							placeholder='Укажите адрес электронный почты'
							onChange={enteredEmailHandler}
							value={enteredEmail}
							onBlur={emailBlurHandler}
						/>
						{emailInputIsInValid && (
							<p>Email не должен быть пустым</p>
						)}
					</div>
					<div className={passwordInputClass}>
						<input
							type='password'
							id='password'
							placeholder='Выведите пароль'
							onChange={enteredPasswordHandler}
							value={enteredPassword}
							onBlur={passwordBlurHandler}
						/>
						{passwordInputIsInValid && (
							<p>Password не должен быть пустым</p>
						)}
					</div>
					<button
						className='btn'
						type='submit'
						disabled={formIsValid}
					>
						<b>Войти</b>
					</button>
					<p>Или</p>
					<div className='logo'>
						<button className='social facebook'>
							Войти через Facebook
						</button>
						<button className='social twitter'>
							Войти через Twitter
						</button>
						<button className='social google'>
							Войти через Google+
						</button>
					</div>
					<hr />
					<div className='pass-txt'>
						<a href='#'>Вход с помощью SSO</a>
					</div>
				</form>
				<div className='sign-txt'>
					Не удается войти? <a href='#'>Зарегистрировать аккаунт</a>
				</div>
			</Wrapper>
		</MaxGlobal>
		</>
	)
}
const GlobalStyle = createGlobalStyle`
body{
	background: linear-gradient(-45deg, #ee7752, #E73C7E, #23A605, #23D5AB);
}
`
const Logo = styled.div`
	img {
		display: block;
		height: 43px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 30px;
	}
	h1 {
		color: rgb(79, 79, 112);
	}
`
const MaxGlobal = styled.div`
    display: flex;
	justify-content: center;
`
const Wrapper = styled.div`
	width: 400px;
	padding: 30px 30px 50px 30px;
	background: #fff;
	border-radius: 5px;
	text-align: center;
	box-shadow: 10px 10px 15px rgb(0 0 0 / 10%);
	& h3 {
		text-align: center;
		color: #5e6c84;
		font-size: 16px;
		letter-spacing: -0.01em;
		line-height: 28px;
		margin-top: 10px;
		margin-bottom: 25px;
	}
	& form div {
		width: 100%;
		margin-bottom: 30px;
	}
	& form input {
		height: 45px;
		width: 100%;
		padding: 0 45px;
		font-size: 18px;
		background: none;
		caret-color: #5372f0;
		border-radius: 10px;
		border: 1px solid #0498ee;
		border-bottom-width: 2px;
		transition: all 0.2s ease;
	}
	& form input::placeholder {
		color: #bfbfbf;
		font-size: 17px;
	}
	& a {
		color: #5372f0;
		text-decoration: none;
		font-size: 13px;
	}
	& form b {
		font-size: 15px;
		color: white;
	}
	& a:hover {
		text-decoration: underline;
	}
	& form button[type='submit'] {
		height: 40px;
		width: 340px;
		padding: 8.4px 18.2px;
		border: none;
		border-radius: 5px;
		background: #5aac44;
		cursor: pointer;
		border-bottom: 2px solid rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
	}
	& form div.logo {
		width: 200px;
		margin-left: 60px;
	}

	& form button.social {
		margin-bottom: 20px;
		width: 220px;
		height: 36px;
		border: none;
		border-radius: 2px;
		font-size: 15px;
		transition: 0.2s;
		color: #fff;
	}

	& button.facebook {
		background: #345392;
	}
	& button.facebook:hover {
		background: #0a52e0;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	& button.twitter {
		background: #55acee;
	}
	& button.twitter:hover {
		background: #0e62a3;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	& button.google {
		background: #dd4b39;
	}
	& button.google:hover {
		background: #ca200a;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	& .invalid p {
		color: red;
		margin: 0px;
	}

	& .invalid input {
		border: 2px solid #b40e0e;
		background-color: #fddddd;
	}
	& .error-text {
		color: #b40e0e;
	}

	& button:disabled,
	& button:disabled:hover,
	& button:disabled:active {
		background-color: #ccc;
		color: #3f3f3f;
		border-color: #ccc;
		cursor: not-allowed;
	}
`

export default TrelloForm
