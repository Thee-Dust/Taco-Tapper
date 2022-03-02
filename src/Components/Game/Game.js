import React, { useState } from 'react'
import taco from '../../Assets/Taco.png'
import { useGame } from '../../Context/GameContext';
import useAnimationFrame from '../../Hooks/useAnimationFrame';
import './Game.scss'


export default function Game() {
	const { tacosGained, totalTacos, tacosPerSecond, tacosPerClick } = useGame();
	const [ displayedTacos, setDisplayedTacos ] = useState(totalTacos);
	const tacoNoun = totalTacos === 1 ? 'Taco' : 'Tacos';
	
	const lerp = (start, end, time) => {
		return start + (end-start) * time
	}
	
	useAnimationFrame((deltaTime) => {
		setDisplayedTacos(prevState => lerp(prevState, totalTacos, (deltaTime/350)))
	})

	const tacosTapped = (num) => {
		tacosGained(num)
	}

	return (
		<div className="taco-tapper">
			<div className="tacos">
				<h2>{Math.round(displayedTacos).toLocaleString()} {tacoNoun}</h2>
				<h3>{tacosPerSecond.toLocaleString()} tacos per second</h3>
			</div>
			<button onClick={() => tacosTapped(tacosPerClick)}className="taco-button">
				<img src={taco} alt="pixel art of a taco" className="taco-img"/>
			</button>
		</div>
	)
}
