import React from 'react'
import taco from '../../Assets/Taco.png'
import './ShopOption.scss'

export default function ShopOption({ totalTacos, tacosSpent, name, level, price, description }) {
	//checks to see if user has enough tacos to spend on upgrade
	const isDisabled = totalTacos < price ? true : false;

	const spendTacos = (num) => {
		tacosSpent(num)
	}
	
	return (
		<button className="upgrade" onClick={() => spendTacos(price)} disabled={isDisabled}>
			<div className="top-upgrade-row">
				<p>{name}</p>
				<p>LVL: {level}</p>
			</div>
			<div className="bottom-upgrade-row">
				<p><img src={taco} alt="pixel art of a taco" className="taco-image"/>{price}</p>
				<p>{description}</p>
			</div>
		</button>
	)
}
