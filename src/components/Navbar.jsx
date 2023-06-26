const Navbar = () => {
	return (
		<header className='header'>
			<a href='#' className='logo'>
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
