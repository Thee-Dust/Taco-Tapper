import React from 'react'
import taco from '../../Assets/Taco.png'
import './Shop.scss'

export default function Shop({ totalTacos, tacosSpent }) {
	



	return (
		<div className="shop">
			<h2>Shop</h2>
			<div className="shop-upgrades">
				<button className="upgrade">
					<div className="top-upgrade-row">
						<p>Taco Tuesday</p>
						<p>LVL: 1</p>
					</div>
					<div className="bottom-upgrade-row">
						<p><img src={taco} alt="pixel art of a taco" className="taco-image"/>100</p>
						<p>adds 1 Taco per click</p>
					</div>
				</button>
			</div>
		</div>
	)
}