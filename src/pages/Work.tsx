import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import FadeIn from 'react-fade-in';
import Clickable from '../components/Clickable';

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
			<FadeIn className="projects" delay={300}>
				<Clickable toPath="https://untangledcables.com/">
					<div className="untangled-cables project">
						<div className="left">
							<h3>Untangled Cables</h3>
							<p>
								An online cable shop featuring a full client
								database, stripe integration, and an admin
								dashboard to update products and product groups.
							</p>
						</div>
						<div className="right"></div>
					</div>
				</Clickable>
				<Clickable toPath="https://tweeter-app.vercel.app/">
					<div className="tweeter project"></div>
				</Clickable>
				<Clickable toPath="https://morningroast.vercel.app/">
					<div className="morning-roast project"></div>
				</Clickable>
			</FadeIn>
			<Footer />
		</div>
	);
};

export default Work;
