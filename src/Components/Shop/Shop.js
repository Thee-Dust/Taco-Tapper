import React from 'react'
import taco from '../../Assets/Taco.png'
import './Shop.scss'

export default function Shop() {
	return (
		<div class="shop">
			<h2>Shop</h2>
			<div class="shop-upgrades">
				<button class="upgrade">
					<div class="top-upgrade-row">
						<p>Taco Tuesday</p>
						<p>LVL: 1</p>
					</div>
					<div class="bottom-upgrade-row">
						<p><img src={taco} alt="pixel art of a taco" class="taco-image"/>100</p>
						<p>adds 1 Taco per click</p>
					</div>
				</button>
			</div>
		</div>
	)
}