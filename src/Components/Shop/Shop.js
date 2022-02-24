import React from 'react'
import ShopOptionsData from '../../ShopData/ShopData.json'
import ShopOption from '../ShopOption/ShopOption'
import './Shop.scss'

export default function Shop() {

const shopOptionCards = ShopOptionsData.map((option, index) => {
	return(
		<ShopOption 
		key={index}
		name={option.name}
		level={option.level}
		price={option.price}
		reward={option.reward}
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