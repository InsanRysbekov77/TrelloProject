import React, { Suspense } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoadingSpiner from '../ui/LoadingSpiner'

const StyledDiv = styled.div`
	margin: 90px auto;
`
const Home = React.lazy(() => import('../../pages/Home'))
const TrelloForm = React.lazy(() => import('../../pages/LoginForm'))
const TodoList = React.lazy(() => import('../../pages/TodoForm'))
const Error404 = React.lazy(() => import('../ui/modal/Error404'))

const Wrapper = () => {
	return (
		<BrowserRouter>
			<Suspense
				fallback={
					<div className='centered'>
						<LoadingSpiner />
					</div>}>
				<StyledDiv>
					<div>
						<Routes>
							<Route
								path='/'
								element={<Navigate replace to={'/Home'} />}
							/>
							<Route path='/Home' element={<Home />} />
							<Route
								path='/TrelloForm'
								element={<TrelloForm />}
							/>
							<Route path='/TodoList' element={<TodoList />} />
							<Route path='*' element={<Error404 />} />
						</Routes>
					</div>
				</StyledDiv>
			</Suspense>
		</BrowserRouter>
	)
}
export default Wrapper
