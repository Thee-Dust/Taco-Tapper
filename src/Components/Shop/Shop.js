import React, { useState, useEffect } from 'react'

import ShopOption from '../ShopOption/ShopOption'
import getShopData from '../ApiCalls/ApiCalls'
import './Shop.scss'

export default function Shop() {
	const [ shopOptionsData, setShopOptionsData ] = useState([]);
	const [ error, setError ] = useState('');

	const updateShopData = (index) => {
		let updatedShopData = [...shopOptionsData];
		updatedShopData[index].level++
		setShopOptionsData(updatedShopData)
	}

	useEffect(() => {
		const callShopData = async () => {
			setError('')
			try{
				const savedShopData = localStorage.getItem('shop-data');
				if(savedShopData !== null) {
					setShopOptionsData(JSON.parse(savedShopData))
				} else {
					const fetchedShopData = await getShopData();
					setShopOptionsData(fetchedShopData)
				}
			} catch(error) {
				setError(error.message)
			}
		}
		callShopData()
	}, [])

		useEffect(() => {
		const saveShopDataToStorage = () => {
			localStorage.setItem('shop-data', JSON.stringify(shopOptionsData))
		};
		saveShopDataToStorage(shopOptionsData)
	}, [shopOptionsData])

	let shopOptionCards = <h1>No Options yet</h1>

	if(shopOptionsData.length > 0) {
		shopOptionCards = shopOptionsData.map((option, index) => {
			return(
				<ShopOption 
				key={index}
				id={index}
				name={option.name}
				level={option.level}
				basePrice={option.price}
				reward={option.reward}
				rewardType={option.rewardType}
				description={option.description}
				updateShopData={updateShopData}
				/>
				)
		})
	}


	return (
		<div className="shop">
			<h2>Shop</h2>
			<div className="shop-upgrades">
				{shopOptionCards}
			</div>
		</div>
	)
}