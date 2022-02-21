import React from 'react'
import './Game.scss'

export default function Game() {
	return (
		<div className="taco-tapper">
			<div className="tacos">
				<h2>1,243 Tacos</h2>
				<h3>3 Tacos per second</h3>
			</div>
			<button className="taco-button">
				<img src='../../Assets/Taco.png' alt="pixel art of a taco" className="taco-img"/>
			</button>
		</div>
	)
}
