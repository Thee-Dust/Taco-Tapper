import React from 'react'
import taco from '../../Assets/Taco.png'
import './Game.scss'

export default function Game({ totalTacos, tacosGained, tacosPerSecond }) {
	const tacoNoun = totalTacos === 1 ? 'Taco' : 'Tacos';

	const tacosTapped = (num) => {
		tacosGained(num)
	}

	return (
		<div className="taco-tapper">
			<div className="tacos">
				<h2>{totalTacos} {tacoNoun}</h2>
				<h3>{tacosPerSecond} tacos per second</h3>
			</div>
			<button onClick={() => tacosTapped(1)}className="taco-button">
				<img src={taco} alt="pixel art of a taco" className="taco-img"/>
			</button>
		</div>
	)
}
