import React from 'react'
import ReactDOM from 'react-dom'
import Drawer from 'react-bottom-drawer';
import Shop from '../Shop/Shop';
import './BottomDrawer.scss';



const ShopDrawer = ({isVisible, closeDrawer}) => {
	return (
		<Drawer
			duration={500}
			hideScrollbars={true}
			isVisible={isVisible}
			onClose={closeDrawer}
			className='drawer'
			data-testid='drawer'
		>
			<Shop />
		</Drawer>
	)
}



export default function BottomDrawer({closeDrawer, isVisible}) {
	return (
		<>
		{ReactDOM.createPortal(
			<ShopDrawer isVisible={isVisible} closeDrawer={closeDrawer}/>,
			document.getElementById('drawer-root')
		)}
		</>
	)
}

