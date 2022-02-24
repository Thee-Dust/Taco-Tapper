import React from 'react'
import taco from '../../Assets/Taco.png'
import { useGame } from '../../Context/GameContext';
import './Game.scss'


export default function Game() {
	const { tacosGained, totalTacos, tacosPerSecond, tacosPerClick } = useGame();
	const tacoNoun = totalTacos === 1 ? 'Taco' : 'Tacos';

	const tacosTapped = (num) => {
		tacosGained(num)
	}

	return (
		<div className="taco-tapper">
			<div className="tacos">
				<h2>{totalTacos.toLocaleString()} {tacoNoun}</h2>
				<h3>{tacosPerSecond.toLocaleString()} tacos per second</h3>
			</div>
			<button onClick={() => tacosTapped(tacosPerClick)}className="taco-button">
				<img src={taco} alt="pixel art of a taco" className="taco-img"/>
			</button>
		</div>
	)
}
