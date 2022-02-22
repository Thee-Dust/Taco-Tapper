import React, { useState } from 'react'
import Game from '../Game/Game'
import Shop from '../Shop/Shop'
import './GameContainer.scss'

export default function GameContainer() {
	const [ totalTacos, setTotalTacos ] = useState(0);
	const [ tacosPerSecond, setTacosPerSecond ] = useState(0);

	const tacosGained = (num) => {
		setTotalTacos(prevState => prevState + num)
	}

	const tacosSpent = (num) => {
		setTotalTacos(prevState => prevState - num)
	}

	return (
		<main className='game'>
			<Game totalTacos={totalTacos} tacosGained={tacosGained} tacosPerSecond={tacosPerSecond}/>
			<Shop totalTacos={totalTacos} tacosSpent={tacosSpent} />
		</main>
	)
}
