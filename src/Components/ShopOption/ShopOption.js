import React, { useState } from 'react'
import taco from '../../Assets/Taco.png'
import { useGame } from '../../Context/GameContext';
import './ShopOption.scss'

export default function ShopOption({ name, level, price, reward, rewardType, description }) {
	const [ optionLevel, setOptionLevel ] = useState(level)
	const { totalTacos, tacosSpent, tacosGainedPerSecond, tacosGainedPerClick } = useGame()
	
	//checks to see if user has enough tacos to spend on upgrade
	const isDisabled = totalTacos < price ? true : false;

	const spendTacos = (num, reward) => {
		setOptionLevel(prevState => prevState + 1)
		tacosSpent(num)
		if(rewardType === "click"){
			tacosGainedPerClick(reward)
			return
		} 
		tacosGainedPerSecond(reward)
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
