import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../images/fullstack.svg';

type NavbarProps = {
	pageName: string;
};

const checkActive = (pageName: string, compareTo: string): boolean => {
	if (pageName === compareTo) return true;

	return false;
};

const Navbar = ({ pageName }: NavbarProps) => {
	const history = useHistory();

	return (
		<div className="navbar">
			<div className="logo">
				<img src={Logo} alt="NTD Custom Software Development" />
				<h1>
					NTD <span>Custom</span> Software Development
				</h1>
			</div>
			<div className="nav-links">
				<div className="links">
					<Link
						to="/home"
						className={
							checkActive(pageName, 'home') ? 'active' : ''
						}
					>
						Home
					</Link>
					<Link
						to="/services"
						className={
							checkActive(pageName, 'services') ? 'active' : ''
						}
					>
						Services
					</Link>
					<Link
						to="/portfolio"
						className={
							checkActive(pageName, 'portfolio') ? 'active' : ''
						}
					>
						Work
					</Link>
					<Link
						to="/about"
						className={
							checkActive(pageName, 'about') ? 'active' : ''
						}
					>
						About
					</Link>
				</div>
				<button onClick={() => history.push('/contact')}>
					Contact Us
				</button>
			</div>
		</div>
	);
};

export default Navbar;
