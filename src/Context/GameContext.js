import React, { useContext, useState, useEffect } from 'react'

const GameContext = React.createContext();

export function useGame() {
	return useContext(GameContext)
}

export function GameProvider({ children }) {
	const [ tacosPerClick, setTacosPerClick ] = useState(() => {
		const savedTacosPerClick = localStorage.getItem('tacos-per-click');
		return savedTacosPerClick !== null ? JSON.parse(savedTacosPerClick) : 1
	});

	const [ totalTacos, setTotalTacos ] = useState(() => {
		const savedTotalTacos = localStorage.getItem('total-tacos');
		return savedTotalTacos !== null ? JSON.parse(savedTotalTacos) : 0
	});

	const [ tacosPerSecond, setTacosPerSecond ] = useState(() => {
		const savedTacosPerSec = localStorage.getItem('tps');
		return savedTacosPerSec !== null ? JSON.parse(savedTacosPerSec) : 0
	});

	useEffect(()=> {
		const addTacosPerSec = setInterval(()=> {
			setTotalTacos(prevState => prevState + tacosPerSecond)
		}, 1000);

		return () => clearInterval(addTacosPerSec);
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

	const tacosGainedPerClick = (num) => {
		setTacosPerClick(prevState => prevState + num)
	}

	// useEffects used to save state into local storage

	useEffect(() => {
		const saveTotalTacosToStorage = () => {
			localStorage.setItem('total-tacos', JSON.stringify(totalTacos))
		};
		saveTotalTacosToStorage()
	}, [totalTacos])

	useEffect(() => {
		const saveTacosPerSecondToStorage = () => {
			localStorage.setItem('tps', JSON.stringify(tacosPerSecond))
		};
		saveTacosPerSecondToStorage(tacosPerSecond)
	}, [tacosPerSecond])

	useEffect(() => {
		const saveTacosPerClick = () => {
			localStorage.setItem('tacos-per-click', JSON.stringify(tacosPerClick))
		};
		saveTacosPerClick()
	}, [tacosPerClick])

const value={
	tacosPerClick,
	totalTacos,
	tacosPerSecond,
	tacosGained,
	tacosSpent,
	tacosGainedPerSecond,
	tacosGainedPerClick
}

	return (
		<GameContext.Provider value={value}>
			{children}
		</GameContext.Provider>
	)
}
