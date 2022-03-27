import React, { useEffect } from 'react'
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
	const passwordInputIsInValid = enteredPasswordIsValid && enteredPasswordTouched
	
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
				 navigate('/TodoList')
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
			<h1>
				<span>T</span>
				<span>R</span>
				<span>E</span>
				<span>L</span>
				<span>L</span>
				<span>O</span>
			</h1>
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
						Не удается войти?{' '}
						<a href='#'>Зарегистрировать аккаунт</a>
					</div>
				</Wrapper>
			</MaxGlobal>
		</>
	)
}
const GlobalStyle = createGlobalStyle`
body {
  background-color: skyblue;
  background-image: -webkit-linear-gradient(90deg, skyblue 0%, steelblue 100%);
  background-attachment: fixed;
}
 & h1 {
  text-align: center;
}
 & h1 span {
  position: relative;
  top: 45px;
  -webkit-animation: bounce 0.3s ease infinite alternate;
  font-size: 50px;
  color: #fff;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
    0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
    0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
}
 & h1 span:nth-child(2) {
  -webkit-animation-delay: 0.1s;
}
 & h1 span:nth-child(3) {
  -webkit-animation-delay: 0.2s;
}
 & h1 span:nth-child(4) {
  -webkit-animation-delay: 0.3s;
}
 & h1 span:nth-child(5) {
  -webkit-animation-delay: 0.4s;
}
 & h1 span:nth-child(6) {
  -webkit-animation-delay: 0.5s;
}
 & h1 span:nth-child(7) {
  -webkit-animation-delay: 0.6s;
}
 & h1 span:nth-child(8) {
  -webkit-animation-delay: 0.2s;
}
 & h1 span:nth-child(9) {
  -webkit-animation-delay: 0.3s;
}
 & h1 span:nth-child(10) {
  -webkit-animation-delay: 0.4s;
}
 & h1 span:nth-child(11) {
  -webkit-animation-delay: 0.5s;
}
 & h1 span:nth-child(12) {
  -webkit-animation-delay: 0.6s;
}
 & h1 span:nth-child(13) {
  -webkit-animation-delay: 0.7s;
}
 & h1 span:nth-child(14) {
  -webkit-animation-delay: 0.8s;
}
@-webkit-keyframes bounce {
  100% {
    top: 25px;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
      0 50px 25px rgba(0, 0, 0, 0.2);
  }
}
`
const MaxGlobal = styled.div`
	display: flex;
	justify-content: center;
	/* margin: 0 auto; */
	height: 100%;
	width: 100%;
`
const Wrapper = styled.div`
	margin-top: 20px;
	width: 380px;
	height: 620px;
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
		margin-bottom: 20px;
	}
	& form input {
		height: 37px;
		width: 300px;
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
		width: 280px;
		padding: 8.4px 18.2px;
		border: none;
		border-radius: 5px;
		background: #5aac44;
		cursor: pointer;
		border-bottom: 2px solid rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
	}
	& form div.logo {
		width: 150px;
		margin-left: 50px;
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
