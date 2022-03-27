import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { todoSliceActions } from '../store/todo-slice'
import Modal from '../components/ui/modal/Modal'

const TodoItem = (props) => {
	const dispatch = useDispatch()
	const [text, setText] = useState('')
	const [showCart, setShowCart] = useState(false)
	const [modalActive, setModalActive] = useState(false)

	const stateHandler = (e) => {
		setText(e.target.value)
	}
	const addTaskHandler = (e) => {
		if (text.trim().length > 0) {
			const taskData = {
				task: text,
				id: Math.random().toString(),
			}
			const key = e.target.id
			dispatch(todoSliceActions.addTextArea({ taskData, key }))
		}
	}
	return (
		<Wrap>
			<input defaultValue={props.title} />
			<ul>
				{props.tasks.map((el) => (
				<Item>
					<li onClick={() => setModalActive(true)} key={el.id}>{el.task}</li>
					<span><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
				</Item>
				))}
			</ul>
			{showCart ? (
				<div>
					<textarea
						className='textArea'
						type='text'
						onChange={stateHandler}
						placeholder='Вывести загаловок для этой карточки'
						value={text}
					/>
					<DivCart>
						<Add onClick={addTaskHandler} id={props.id}>
							Добавить
						</Add>
						<img
							onClick={() => setShowCart(false)}
							src='https://img.icons8.com/stickers/344/delete-sign.png'
						/>
						<img src='https://img.icons8.com/color/344/dots-loading.png' />
					</DivCart>
				</div>
			) : (
				<CartItem>
					<button onClick={() => setShowCart(true)}>
						+ Добавить карточку
					</button>
					<i className='fa fa-list-alt' aria-hidden='true'></i>
				</CartItem>
			)}
			{modalActive && <Modal setModalActive={setModalActive} />} 
		</Wrap>
	)
}
const Wrap = styled.div`
	align-items: flex-start;
	background-color: #ebecf0;
	border-radius: 3px;
	width: 250px;
	padding: 5px;
	& button {
		padding: 4px 25px;
		background-color: #0079bf;
		border: none;
		color: #fff;
		border-radius: 4px;
		height: 32px;
	}
	& textarea {
		max-width: 550px;
		min-width: 240px;
		min-height: 50px;
		max-height: 200px;
		border-radius: 5px;
		border: none;
	}
	& input {
		width: 100%;
		height: 30px;
		color: red;
		font-size: 20px;
		border: none;
		background: #ebecf0;
	}
	& i {
		font-size: 30px;
		color: #5e6c84;
	}
	& li {
		list-style: none;
		width: 120%;
		border-radius: 5px;
		padding: 6px 8px 5px;
		background: white;
		margin: 10px;
		margin-left: -40px;
		transition: 300ms all;
		:hover {
			transform: scale(1.1);
			background-color: #0079bf;
		}
	}
`
const Item = styled.div`
      display: flex;
	  justify-content: space-between;
	  & span {
		  width: 10px;
		  margin-top: 10px;
	  }
	  & span i {
		  color: white;
		  &:hover {
			opacity: 0.8;
            color: #0079bf;
		}
	  }
`
const DivCart = styled.div`
	padding-left: 5px;
	display: flex;
	justify-content: space-between;
	& img {
		width: 30px;
		margin-top: 20px;
		margin-left: 30px;
	}
`
const CartItem = styled.div`
	display: flex;
	justify-content: space-between;
`
const Add = styled.button`
   margin-top: 20px;
`

export default TodoItem
