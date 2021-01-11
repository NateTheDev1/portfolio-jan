import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroImage from '../images/hero.svg';
import { useHistory } from 'react-router-dom';

const Home = () => {
	const history = useHistory();

	return (
		<div className="home-root">
			<Navbar pageName="home" />
			<div className="hero">
				<div className="hero-left">
					<h1>
						<span className="highlight">You</span> can trust me to
						bring <span className="highlight">Your</span> ideas to
						life and make the{' '}
						<span className="highlight">impact</span> you{' '}
						<span className="highlight">invision</span>.
					</h1>
					<p>
						I'm here to design, develop, and produce high quality
						software, applications, and apps to best fit your
						business needs.
					</p>
					<button
						className="cta"
						onClick={() => history.push('/contact')}
					>
						Get Started
					</button>
				</div>
				<div className="hero-right">
					<img src={HeroImage} alt="Programmer on computer" />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
