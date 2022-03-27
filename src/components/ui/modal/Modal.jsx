import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

const Backdrop = () => {
	return <CartBacdrop />
}
const ModalOverlay = ({setModalActive,addTaskHandler,id}) => {
	return (
		<ModalContentControl>
					<div>
						<MinCart1>
							<i
							    className='fa fa-window-maximize'
								aria-hidden='true'
							></i>
							<h1>Redux middleware</h1>
							<img src='https://cdn-icons-png.flaticon.com/512/1014/1014679.png' />
						</MinCart1>
						<p>
							в калонке{' '}
							<a style={{ color: '#44454b' }} href='#'>
								To Do
						    </a>
						</p>
						<MinCart2>
							<i
								className='fa fa-align-left'
								aria-hidden='true'
							></i>
							<h2>Описание</h2>
						</MinCart2>
						<textarea
							className='text'
							placeholder='Добавить более подробное описание...'
						/>
						<Button>
							<div>
								<button onClick={() => addTaskHandler()}> Сохранить </button>
								<button onClick={() => setModalActive(false)}>X</button>
							</div>
							<input placeholder='Помощь по форматированию' />
						</Button>
					</div>
				</ModalContentControl>
	)
}
const Modal = ({setModalActive}) => {
	return (
		<>
		 {
			 ReactDOM.createPortal(
				 <Backdrop />,
				 document.getElementById('backdrop-root')
			 )}
			 {
				 ReactDOM.createPortal(
					 <ModalOverlay setModalActive={setModalActive}/>,
					 document.getElementById('modal-root')
				 )
			 }
		</>
	)
}
const CartBacdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
`
const ModalContentControl = styled.div`
    position: fixed;
	padding: 10px;
	top: 30vh;
	left: 25%;
	border-radius: 12px;
	background-color: #ebecf0;
	height: 400px;
	width: 650px;
	z-index: 100;
	& textarea.text {
		height: 100px;
		width: 90%;
		border-radius: 10px;
		margin-left: 50px;
		background-color: aliceblue;
		outline: none;
		border-color: #0079bf;
		color: black;
		font-size: 16px;
	}
	& h1 {
		margin-top: 20px;
		margin-right: 165px;
		font-size: 30px;
		color: #44454b;
	}
	& h2 {
		text-align: center;
		margin-left: 20px;
		margin-top: 25px;
		font-size: 20px;
		color: #44454b;
	}
	& button {
		padding: 10px 30px;
		border-radius: 100px;
		color: #fff;
		border: none;
		background: #0079bf;
		cursor: pointer;
		font-family: 'Roboto', sans-serif;
		font-weight: 500;
		transition: 0.3s ease all;
	}
	& i {
		font-size: 30px;
		margin-top: 20px;
	}
	& p {
		font-size: 20px;
		margin-left: 50px;
		margin-top: -10px;
		color: #44454b;
	}
	& img {
		width: 100px;
	}
`
const MinCart1 = styled.div`
	display: flex;
	justify-content: space-between;
`
const MinCart2 = styled.div`
	display: flex;
`
const Button = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	& div {
		display: flex;
		justify-content: space-between;
		width: 220px;
		margin-top: 20px;
	}
	& input {
		width: 37%;
		font-size: 15px;
		color: black;
		border: none;
		border-radius: 100px;
		background-color: #091e420a;
		height: 40px;
		margin-top: 20px;
	}
`
export default Modal
