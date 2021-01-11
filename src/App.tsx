import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';

function App() {
	const location = useLocation();

	return (
		<AnimatePresence exitBeforeEnter>
			<Switch location={location} key={location.pathname}>
				<Route path="/portfolio">
					<Work />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</AnimatePresence>
	);
}

export default App;
