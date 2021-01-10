import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorkerRegistration';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);

serviceWorker.register();
