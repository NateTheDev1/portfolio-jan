import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroImage from '../images/hero.svg';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn from 'react-fade-in';

const Home = () => {
	const history = useHistory();

	return (
		<motion.div className="home-root">
			<Navbar pageName="home" />
			<motion.div exit={{ opacity: 0 }}>
				<div className="hero">
					<div className="hero-left">
						<FadeIn delay={225}>
							<h1>
								<span className="highlight">You</span> can trust
								me to bring{' '}
								<span className="highlight">Your</span> ideas to
								life and make the{' '}
								<span className="highlight">impact</span> you{' '}
								<span className="highlight">invision</span>.
							</h1>
							<p>
								I'm here to design, develop, and produce high
								quality software, applications, and apps to best
								fit your business needs.
							</p>
							<button
								className="cta"
								onClick={() => history.push('/contact')}
							>
								Get Started
							</button>
						</FadeIn>
					</div>
					<div className="hero-right">
						<img src={HeroImage} alt="Programmer on computer" />
					</div>
				</div>
			</motion.div>
			<Footer />
		</motion.div>
	);
};

export default Home;
