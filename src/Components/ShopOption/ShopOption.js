import React, { useState } from 'react'
import taco from '../../Assets/Taco.png'
import { useGame } from '../../Context/GameContext';
import './ShopOption.scss'

export default function ShopOption({ name, level, basePrice, reward, rewardType, description }) {
	// const [ optionPrice, setOptionPrice ] = useState(basePrice)
	const [ optionLevel, setOptionLevel ] = useState(level)
	const { totalTacos, tacosSpent, tacosGainedPerSecond, tacosGainedPerClick } = useGame()
	
	const optionPrice = optionLevel === 0 ? basePrice : Math.round(basePrice * Math.pow(optionLevel + 1, 1.1));
	
	//checks to see if user has enough tacos to spend on upgrade
	const isDisabled = totalTacos < optionPrice ? true : false;


	const spendTacos = (price, reward) => {
		setOptionLevel(prevState => prevState + 1)
		tacosSpent(price)
		if(rewardType === "click"){
			tacosGainedPerClick(reward)
			return
		} 
		tacosGainedPerSecond(reward)
	}
	
	return (
		<button className="upgrade" onClick={() => spendTacos(optionPrice, reward)} disabled={isDisabled}>
			<div className="top-upgrade-row">
				<p>{name}</p>
				<p>LVL: {optionLevel}</p>
			</div>
			<div className="bottom-upgrade-row">
				<p><img src={taco} alt="pixel art of a taco" className="taco-image"/>{optionPrice.toLocaleString()}</p>
				<p>{description}</p>
			</div>
		</button>
	)
}
