import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App/App';
import { GameProvider } from './Context/GameContext'


ReactDOM.render(
	<GameProvider>
		<App />
	</GameProvider>,
  document.getElementById('root')
);


