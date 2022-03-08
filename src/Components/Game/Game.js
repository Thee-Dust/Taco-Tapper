import React, { useState, useCallback } from 'react'
import taco from '../../Assets/Taco.png'
import { useGame } from '../../Context/GameContext';
import useAnimationFrame from '../../Hooks/useAnimationFrame';
import BottomDrawer from '../BottomDrawer/BottomDrawer';
import './Game.scss'


export default function Game() {
	const { tacosGained, totalTacos, tacosPerSecond, tacosPerClick } = useGame();
	const [ displayedTacos, setDisplayedTacos ] = useState(totalTacos);
	const tacoNoun = totalTacos === 1 ? 'Taco' : 'Tacos';

	const [ isVisible, setIsVisible ] = useState(false);
	const openDrawer = useCallback(() => setIsVisible(true), [])
  const closeDrawer = useCallback(() => setIsVisible(false), [])
	
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
		<>
			<div className="taco-tapper">
				<div className="tacos">
					<h2 data-testid='total-tacos'>{Math.round(displayedTacos).toLocaleString()} {tacoNoun}</h2>
					<h3 data-testid='tacos-per-second'>{tacosPerSecond.toLocaleString()} tacos per second</h3>
				</div>
				<button onClick={() => tacosTapped(tacosPerClick)} data-testid='taco-btn' className="taco-button">
					<img src={taco} alt="pixel art of a taco" className="taco-img" data-testid='taco-img'/>
				</button>
				<button className='shop-btn' data-testid='shop-btn' onClick={openDrawer}>
					<h2>SHOP</h2>
				</button>
			</div>
			<BottomDrawer closeDrawer={closeDrawer} isVisible={isVisible} />
		</>
	)
}
