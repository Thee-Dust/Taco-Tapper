import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App/App';
import { GameProvider } from './Context/GameContext'


ReactDOM.render(
	<React.StrictMode>
		<GameProvider>
			<App />
		</GameProvider>
	</React.StrictMode>,
  document.getElementById('root')
);


