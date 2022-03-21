import React from 'react'
import TrelloForm from '../LoginForm'
import TodoList from '../TodoForm'
import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const StyledDiv = styled.div`
	margin: 90px auto;
`
const Wrapper = () => {
	return (
		<StyledDiv>
			<BrowserRouter>
				<div>
					<Routes>
						<Route path='/' element={<TrelloForm />} />
						<Route path='/TodoList' element={<TodoList />} />
					</Routes>
				</div>
			</BrowserRouter>
		</StyledDiv>
	)
}
export default Wrapper
