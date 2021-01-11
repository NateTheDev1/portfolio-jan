import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const Work = () => {
	return (
		<div className="work-root">
			<Navbar pageName="portfolio" />
			<motion.div className="work-header" exit={{ opacity: 0 }}>
				<h2>OUR WORK</h2>
				<p>
					Our projects are primarily web based but in the future we
					plan to complete more projects in the mobile and well
					desktop application space.
				</p>
			</motion.div>
			<Footer />
		</div>
	);
};

export default Work;
