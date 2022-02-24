import React, { useContext, useState, useEffect } from 'react'


const GameContext = React.createContext();

export function useGame() {
	return useContext(GameContext)
}

export function GameProvider({ children }) {
	const [ totalTacos, setTotalTacos ] = useState(0);
	const [ tacosPerSecond, setTacosPerSecond ] = useState(0);

	useEffect(()=> {
		const addTacosPerSec = () => setInterval( setTotalTacos(prevState => prevState + tacosPerSecond),[1000]);

		addTacosPerSec()
	}, [tacosPerSecond])



	const tacosGained = (num) => {
		setTotalTacos(prevState => prevState + num)
	}

	const tacosSpent = (num) => {
		setTotalTacos(prevState => prevState - num)
	}

	const tacosGainedPerSecond = (num) => {
		setTacosPerSecond(prevState => prevState + num)
	}

const value={
	totalTacos,
	tacosPerSecond,
	tacosGained,
	tacosSpent,
	tacosGainedPerSecond
}

	return (
		<GameContext.Provider value={value}>
			{children}
		</GameContext.Provider>
	)
}
