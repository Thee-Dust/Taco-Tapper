import React from 'react'
import taco from '../../Assets/Taco.png'
import { useGame } from '../../Context/GameContext';
import './ShopOption.scss'

export default function ShopOption({id, name, level, basePrice, reward, rewardType, description, updateShopData }) {
	const { totalTacos, tacosSpent, tacosGainedPerSecond, tacosGainedPerClick } = useGame()
	
	const optionPrice = level === 0 ? basePrice : Math.round(basePrice * Math.pow(level + 1, 1.1));
	
	//checks to see if user has enough tacos to spend on upgrade
	const isDisabled = totalTacos < optionPrice ? true : false;

	const spendTacos = (price, reward, index) => {
		updateShopData(index)
		tacosSpent(price)
		if(rewardType === "click"){
			tacosGainedPerClick(reward)
			return
		} 
		tacosGainedPerSecond(reward)
	}
	
	return (
		<button id={id} className="upgrade" onClick={() => spendTacos(optionPrice, reward, id)} disabled={isDisabled} data-testid={`option-${id + 1}`}>
			<div className="top-upgrade-row">
				<p>{name}</p>
				<p>LVL: {level}</p>
			</div>
			<div className="bottom-upgrade-row">
				<p><img src={taco} alt="pixel art of a taco" className="taco-image"/>{optionPrice.toLocaleString()}</p>
				<p>{description}</p>
			</div>
		</button>
	)
}
