import { useState } from 'react';

const Navbar = () => {
	const [scroll, setScroll] = useState(false);

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

			<div className='bx bx-menu' id='menu-icon'></div>
			<nav className='navbar'>
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
