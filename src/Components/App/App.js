import React from 'react'
import GameContainer from '../GameContainer/GameContainer'
import Header from '../Header/Header'
import './App.scss'

export default function App() {
	return (
		<div className='app'>
			<Header/>
			<GameContainer/>
		</div>
	)
}

