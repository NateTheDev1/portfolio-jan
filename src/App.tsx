import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';

function App() {
	return (
		<Switch>
			<Route path="/portfolio">
				<Work />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	);
}

export default App;
