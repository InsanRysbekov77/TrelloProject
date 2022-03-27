import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import { todoSliceActions } from '../store/todo-slice'
import TodoItem from './TodoItem'
import ErrorModal from '../components/ui/modal/ErrorModal'
import Header from '../components/ui/Header'
import { useCallbackPrompt } from '../components/ui/Prompt/Prompt2'
import PromptModal from '../components/ui/modal/PromptModal'

const TodoList = () => {
	const state = useSelector((state) => state.todo.columnData)
	const [showTogle, setShowTogle] = useState(false)
	const [errorModal, setErrorModal] = useState(false)
	const dispath = useDispatch()
	const [showModalPrompt , setShowModalPrompt ] = useState(false)
	const [ showPrompt, confirmNavigation, cancelNavigation ] = useCallbackPrompt(showModalPrompt)
	const [title, setTitle] = useState('')

	const titleChangeHandler = (e) => {
		setTitle(e.target.value)
	} 
	useEffect(()=>{
		if(title.trim().length >0 ){
			setShowModalPrompt(true)
		}
	})
	const sybmitHandler = (e) => {
		setShowModalPrompt(true)
		e.preventDefault()
		if (title.trim().length > 0) {
			const coumnData = {
				title,
				id: Math.random().toString(),
				tasks: [],
			}
			dispath(todoSliceActions.add(coumnData))
			setTitle('')
		} else {
			setErrorModal(<ErrorModal />)
		}
	}
	return (
		<>
		 <GlobalStyle />
		  {showPrompt && <PromptModal confirmNavigation={confirmNavigation} cancelNavigation={cancelNavigation}/>}
		  <Header />
			<Main>
				<CardLists>
					{state.map((el) => {
						return (
							<TodoItem
								key={el.id}
								title={el.title}
								id={el.id}
								tasks={el.tasks}
							/>
						)
					})}
				</CardLists>
				<GlobalFlex>
					{!showTogle ? (
						<Span onClick={() => setShowTogle(true)}>
							+ Добавте ещё одну калонку
						</Span>
					) : (
						<Container onSubmit={sybmitHandler}>
							<Input
								placeholder='Вывести зоголовок списка'
								onChange={titleChangeHandler}
								value={title}
							/>
							<InputContainer>
								<Button type='submit'>Добавит список</Button>
								<img
									onClick={() => setShowTogle(false)}
									src='https://img.icons8.com/nolan/344/delete-sign.png'
								/>
							</InputContainer>
						</Container>
					)}
				</GlobalFlex>
			</Main>
			<ErrorModal
				active={errorModal}
				setActive={() => setErrorModal(false)}
			/>
		</>
	)
}
const GlobalStyle = createGlobalStyle`
body {
  background-color: skyblue;
  background-image: -webkit-linear-gradient(90deg, skyblue 0%, steelblue 100%);
  background-attachment: fixed;
  margin: 0 auto;
}
`
const Main = styled.main`
	display: flex;
	align-items: start;
	width: 1280px;
	margin: 0 auto;
`
const CardLists = styled.section`
	display: flex;
	justify-content: space-between;
	margin-left: 15px;
	align-items: start;
	& div {
		margin-right: 15px;
	}
`
const GlobalFlex = styled.div`
	display: flex;
	align-items: start;
`
const Container = styled.form`
	width: 250px;
	background-color: #ebecf0;
	border-radius: 3px;
	padding: 4px;
	transition: 300ms all;
	:hover {
		transform: scale(1.1);
		background-color: #ebecf0;
	}
`
const InputContainer = styled.div`
	padding-top: 10px;
	display: flex;
	padding-left: 5px;
	& img {
		width: 30px;
		margin-top: 0px;
	}
`
const Input = styled.input`
	padding: 8px 12px;
	width: 100%;
	outline: none;
	border: 3px solid #0079bf;
	border-radius: 4px;
`
const Button = styled.button`
	margin: 0px 4px 0px 0px;
	padding: 4px 12px;
	background-color: #0079bf;
	border: none;
	color: #fff;
	border-radius: 4px;
	height: 32px;
	margin-top: 0;
	min-height: 32px;
	padding-bottom: 4px;
	padding-top: 4px;
`
const Span = styled.span`
	width: 250px;
	text-align: center;
	font-size: 15px;
	color: black;
	background: white;
	padding: 15px 8px;
	border-radius: 7px;
	background-color: #ebecf0;
`
export default TodoList
