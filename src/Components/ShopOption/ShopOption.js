import React, { useState } from 'react'
import taco from '../../Assets/Taco.png'
import { useGame } from '../../Context/GameContext';
import './ShopOption.scss'

export default function ShopOption({ name, level, price, reward, description }) {
	const [ optionLevel, setOptionLevel ] = useState(0)
	const { totalTacos, tacosSpent, tacosGainedPerSecond } = useGame()
	
	//checks to see if user has enough tacos to spend on upgrade
	const isDisabled = totalTacos < price ? true : false;


	const spendTacos = (num, reward) => {
		tacosSpent(num)
		tacosGainedPerSecond(reward)
		setOptionLevel(prevState => prevState + 1)
	}
	
	return (
		<button className="upgrade" onClick={() => spendTacos(price, reward)} disabled={isDisabled}>
			<div className="top-upgrade-row">
				<p>{name}</p>
				<p>LVL: {optionLevel}</p>
			</div>
			<div className="bottom-upgrade-row">
				<p><img src={taco} alt="pixel art of a taco" className="taco-image"/>{price.toLocaleString()}</p>
				<p>{description}</p>
			</div>
		</button>
	)
}
