import { useState } from 'react';

const Navbar = () => {
	const [scroll, setScroll] = useState(false);
	const [navActive, setNavActive] = useState('navbar');
	const [toggleIcon, setToggleIcon] = useState('nav_toggler');

	const navToggle = () => {
		navActive === 'navbar'
			? setNavActive('navbar navbar_active')
			: setNavActive('navbar');

		toggleIcon === 'nav_toggler'
			? setToggleIcon('nav_toggler toggle')
			: setToggleIcon('nav_toggler');
	};

	const changeNavbarBackground = () => {
		if (window.scrollY) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	window.addEventListener('scroll', changeNavbarBackground);

	return (
		<header className={scroll ? 'header active' : 'header'}>
			<a href='#home' className='logo'>
				Fer-<span>Dev</span>.
			</a>

			<div onClick={navToggle} className={toggleIcon}>
				<div className='line1'></div>
				<div className='line2'></div>
				<div className='line3'></div>
			</div>

			<nav className={navActive}>
				<a href='#home'>Home</a>
				<a href='#about'>About</a>
				<a href='#skills'>Skills</a>
				<a href='#projects'>Projects</a>
				<a href='#contact'>Contact</a>
			</nav>
		</header>
	);
};

export default Navbar;
