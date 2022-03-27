import React from 'react'
import styled from 'styled-components'

const ErrorModal = ({ active, setActive }) => {
	if (!active) return null
	return (
		<>
			<Overlay>
				<ContenedorModal>
					<EncabeModal>
						<h3>Hello!</h3>
						<h1></h1>
					</EncabeModal>
					<p>Поля инпута не должен быть пустым!</p>
					<CartBtn>
						<Button onClick={setActive}>Okay</Button>
					</CartBtn>
				</ContenedorModal>
			</Overlay>
		</>
	)
}
const Overlay = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 1000;
	animation: modalAnimation 2s ease 50ms 1 normal backwards;
	@keyframes modalAnimation {
		0% {
			animation-timing-function: ease-in;
			opacity: 1;
			transform: translateY(45px);
		}
		24% {
			opacity: 1;
		}
		40% {
			animation-timing-function: ease-in;
			transform: translateY(24px);
		}
		65% {
			animation-timing-function: ease-in;
			transform: translateY(12px);
		}
		82% {
			animation-timing-function: ease-in;
			transform: translateY(6px);
		}
		93% {
			animation-timing-function: ease-in;
			transform: translateY(4px);
		}
		25%,
		55%,
		75%,
		87% {
			animation-timing-function: ease-out;
			transform: translateY(0px);
		}
		100% {
			animation-timing-function: ease-out;
			opacity: 1;
			transform: translateY(0px);
		}
	}
`
const ContenedorModal = styled.div`
	width: 400px;
	min-height: 100px;
	background: #fff;
	position: relative;
	border-radius: 5px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	padding: 20px;
	& p {
		text-align: center;
	}
`
const EncabeModal = styled.div`
	& h3 {
		font-weight: 500;
		font-size: 26px;
		color: #0079bf;
		margin-top: 10px;
		text-align: center;
	}
	& h1 {
		border-bottom: 1px solid #e8e8e8;
	}
`
const CartBtn = styled.div`
	display: flex;
	justify-content: center;
`
const Button = styled.button`
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #0079bf;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: 0.3s ease all;
`
export default ErrorModal
