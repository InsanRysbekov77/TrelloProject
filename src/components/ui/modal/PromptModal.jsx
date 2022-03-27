import React from 'react'
import styled from 'styled-components'

const PromptModal = ({confirmNavigation, cancelNavigation}) => {
	return (
		<>
		  <Overlay>
				<ContenedorModal>
					<EncabeModal>
						<h3>Вы действительно хотите покинуть эту страницу?</h3>
						<h1></h1>
					</EncabeModal>
					<p>Это может привести к потери данных и удалению информации?</p>
					<CartBtn>
                        <Button2 onClick={confirmNavigation}>Okay</Button2>
                        <Button1 onClick={cancelNavigation}>Отмена</Button1>
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
	background: rgba(0, 0, 0, 0.75);
	transition: 2s;
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
		font-size: 20px;
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
    justify-content: space-around;
`
const Button1 = styled.button`
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: red;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: 0.3s ease all;
`
const Button2 = styled.button`
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
export default PromptModal