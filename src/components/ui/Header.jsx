import React from 'react'
import styled from 'styled-components'

const Header = () => {
	return (
		<Navbar>
			<header>
				<i className='fa fa-bars' aria-hidden='true'></i>
				<i className='fa fa-trello' aria-hidden='true'></i>
				<h1>Trello</h1>
				<ul className='navigation'>
					<li>Рабочие пространства</li>
					<li>Недавние</li>
					<li>В избранном</li>
					<li>Шаблоны</li>
				</ul>
				<p>Создать</p>
				<div className='search'>
					<input type='text' placeholder='Поиск' />
					<i className='fa fa-search' aria-hidden='true'></i>
				</div>
				<button>
					<i className='fa fa-sign-out' aria-hidden='true'></i>
				</button>
			</header>
		</Navbar>
	)
}
const Navbar = styled.div`
	& header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 10;
		background: #39424c;
	}
	& header .fa-bars {
		position: relative;
		font-size: 2.5em;
		color: #fff;
		text-decoration: none;
		font-weight: 600;
	}
	& header .fa-bars:hover {
		background: #21ebff;
		color: #111;
		box-shadow: 0 0 50px #21ebff;
	}
	& header .fa-trello {
		position: relative;
		left: -10px;
		font-size: 2.5em;
		color: #fff;
		text-decoration: none;
		font-weight: 600;
	}
	& header .fa-trello:hover {
		background: #21ebff;
		color: #111;
		box-shadow: 0 0 50px #21ebff;
	}
	header h1 {
		position: relative;
		text-align: center;
		align-items: center;
		font-size: 33px;
		letter-spacing: 15px;
		color: #0e3742;
		text-transform: uppercase;
		-webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
		line-height: 0.7em;
		outline: none;
		animation: animate 5s linear infinite;
	}
	@keyframes animate {
		0% {
			color: #0e3742;
			text-shadow: none;
		}
		100% {
			color: #fff;
			text-shadow: 0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4,
				0 0 80px #03bcf4, 0 0 160px #03bcf4;
		}
	}

	& header .navigation {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin: 10px 0;
	}
	& header button {
		font-size: 30px;
	}

	& header button:hover {
		background: #21ebff;
		color: #111;
		box-shadow: 0 0 50px #21ebff;
	}

	& header .navigation li {
		list-style: none;
		color: #fff;
		flex-direction: none;
		font-weight: 500;
		letter-spacing: 1px;
		margin: 0 15px;
	}
	& header .navigation li a:hover {
		color: #ffeb3b;
	}

	& header .search {
		position: relative;
		width: 300px;
		height: 40px;
		box-shadow: 0 0 30px #21ebff;
	}
	& header p {
		color: #fff;
		font-size: 20px;
	}
	& header .search input {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		color: #fff;
		background: transparent;
		outline: none;
		border: 1px solid #fff;
		border-radius: 4px;
		padding: 0 10px 0 45px;
	}

	& header .search input:hover {
		background: #21ebff;
		color: #111;
		box-shadow: 0 0 50px #21ebff;
	}
	& header .search input::placeholder {
		color: #fff;
	}

	header .search .fa-search {
		position: absolute;
		top: 30%;
		transform: translate(-50%);
		left: 25px;
		color: #fff;
		padding-right: 10px;
	}
`
export default Header
