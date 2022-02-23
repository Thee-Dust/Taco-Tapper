import React from 'react'
import ShopOptionsData from '../../ShopData/ShopData.json'
import './Shop.scss'
import ShopOption from '../ShopOption/ShopOption'

export default function Shop({ totalTacos, tacosSpent }) {

const shopOptionCards = ShopOptionsData.map((option, index) => {
	return(
		<ShopOption 
		key={index}
		totalTacos={totalTacos}
		tacosSpent={tacosSpent}
		name={option.name}
		level={option.level}
		price={option.price}
		description={option.description}
		/>
	)
})


	return (
		<div className="shop">
			<h2>Shop</h2>
			<div className="shop-upgrades">
				{shopOptionCards}
			</div>
		</div>
	)
}