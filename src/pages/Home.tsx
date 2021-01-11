import { faCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Navbar from '../components/Navbar';
import HeroImage from '../images/hero.svg';

const Home = () => {
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
						NTD exists to design, develop, and produce high quality
						software, applications, and apps to fit your specified
						needs.
					</p>
				</div>
				<div className="hero-right">
					<img src={HeroImage} alt="Programmer on computer" />
				</div>
			</div>
			<div className="tech-process">
				<div className="process"></div>

				<div className="process"></div>
				<div className="process"></div>
				<div className="process"></div>
			</div>
		</div>
	);
};

export default Home;
