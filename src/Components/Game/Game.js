import React from 'react'
import taco from '../../Assets/Taco.png'
import './Game.scss'

export default function Game() {
	return (
		<div className="taco-tapper">
			<div className="tacos">
				<h2>1,243 Tacos</h2>
				<h3>3 Tacos per second</h3>
			</div>
			<button className="taco-button">
				<img src={taco} alt="pixel art of a taco" className="taco-img"/>
			</button>
		</div>
	)
}
