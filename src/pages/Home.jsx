import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import LogoTrello from '../components/ui/LogoTrello'

const Home = () => {
    const navigate = useNavigate()
	return (
		<CartWrapper>
        <GlobalStyle/>
			<Header>
				<div>
					<LogoTrello />
				</div>
				<div>
					<button onClick={() => navigate('/TrelloForm')}>Войти</button>
				</div>
			</Header>
			<Main>
				<div>
					<h1>
						Trello помогает командам эффективно решать рабочие
						задачи.
					</h1>
					<p>
						Работайте в команде, управляйте проектами и выводите
						продуктивность на новый уровень собственным уникальным
						способом вместе с Trello.
					</p>
				</div>
				<section>
					<img
						src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png'
						alt=''
					/>
				</section>
			</Main>
		</CartWrapper>
	)
}
const GlobalStyle = createGlobalStyle`
    body {
     background-color: skyblue;
     background-image: -webkit-linear-gradient(90deg, skyblue 0%, steelblue 100%);
     background-attachment: fixed;
}
`
const CartWrapper = styled.div`
     width: 100%;
	 height: 100%;
`
const Header = styled.header`
    width: 100%;
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
	button {
		background: #2299ff;
        border: none;
		padding: 0.6rem 3rem;
		font-size: 24px;
		font-weight: 300;
		cursor: pointer;
		&:hover {
			opacity: 0.8;
            color: white;
		}
	}
`
const Main = styled.main`
	padding-top: 50px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
	h1 {
		font-size: 60px;
		color: #091e42;
	}
	img {
		width: 400px;
		height: 500px;
	}
	div {
		width: 720px;
	}
	p {
		margin-top: 20px;
		font-size: 24px;
		line-height: 150%;
		letter-spacing: 1px;
	}
`

export default Home
