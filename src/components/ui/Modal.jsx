import React from 'react'
import styled from 'styled-components'

const Modal = ({active, setActive}) => {
	if(!active) return null
	return (
		<ModalControl>
			<div className={active ? 'modal active' : 'ModalControl'}>
				<ModalContentControl>
					<div>
                        <MinCart1>
                        <i className="fa fa-window-maximize" aria-hidden="true"></i>
                        <h1>Redux middleware</h1>
                        </MinCart1>
                        <p>в калонке <a style={{color: '#44454b'}} href='#'>To Do</a></p>
                        <MinCart2>
                        <i class="fa fa-align-left" aria-hidden="true"></i>
                        <h2>Описание</h2>
                        </MinCart2>
						<textarea className='text' placeholder='Добавить более подробное описание...' />
						<Button>
					    <button> Сохранить </button>
						<button onClick={setActive}>X</button>
                        <input placeholder='Помощь по форматированию'/>
                        </Button>
					</div>
				</ModalContentControl>
			</div>
		</ModalControl>
	)
}

const ModalControl = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.75);
	transition: 2s;
	& .modal.active {
	opacity: 1;
	pointer-events: all;
}
`

const ModalContentControl = styled.div`
	padding: 10px;
	border-radius: 12px;
	background-color: #ebecf0;
	height: 400px;
	width: 650px;
	opacity: 1;
	pointer-events: all;
	& textarea.text {
		height: 100px;
		width: 300%;
		border-radius: 10px;
		margin-left: 50px;
		background-color: aliceblue;
		outline: none;
		border-color: #0079bf;
		color: black;
		font-size: 16px;
	}
	& h1 {
		text-align: center;
        margin-left: 20px;
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
		font-size: 20px;
		border: 1px solid #4f005f;
		margin-top: 20px;
		border-radius: 10px;
		background-color: #026AA7;
        color: white;
		padding: 0.25rem 1rem;
		cursor: pointer;
	}
    & i {
        font-size: 30px;
    }
    & p {
        font-size: 20px;
        margin-left: 70px;
        margin-top: -10px;
        color: #44454b;
    }
`
const MinCart1 = styled.div`
   display: flex;
   justify-content: 1;
`
const MinCart2 = styled.div`
   display: flex;
   justify-content: 1;
`
const Button = styled.div`
 display: flex;
 justify-content: space-evenly;
 & input {
     width: 37%;
     font-size: 15px;
     color: black;
     border: none;
     background-color: #091e420a;
     height: 40px;
     margin-top: 20px;
 }
`
export default Modal
