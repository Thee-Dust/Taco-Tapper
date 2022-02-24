import React from 'react'
import Game from '../Game/Game'
import Shop from '../Shop/Shop'
import './GameContainer.scss'

export default function GameContainer() {
	return (
		<main className='game'>
			<Game />
			<Shop />
		</main>
	)
}
