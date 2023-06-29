const Home = () => {
	return (
		<main className='home' id='home'>
			<section className='home_content'>
				<h1>
					Hi, I'm <span>Ferdie Nodalo</span>
				</h1>

				<div className='text_animate'>
					<h3>Full-Stack Web Developer</h3>
				</div>

				<p>
					I'm a proud graduate of KodeGo, an esteemed online coding bootcamp
					renowned for providing a strong foundation in programming. With a
					passion for technology and a commitment to excellence, I have
					developed a solid skill set that enables me to tackle complex
					challenges and create innovative solutions.
				</p>
				<div className='btn_box'>
					<button href='#' className='btn'>
						Hire me
					</button>
					<button href='#' className='btn'>
						Download CV
					</button>
				</div>

				<div className='social_media-icons'>
					<a href='https://www.facebook.com/kafrederick.nodalo/'>
						<i className='bx bxl-facebook'></i>
					</a>
					<a href='https://www.linkedin.com/in/ferdie-nodalo-38a092270/'>
						<i className='bx bxl-linkedin-square'></i>
					</a>
					<a href='https://github.com/FerdieNodalo?tab=repositories'>
						<i className='bx bxl-github'></i>
					</a>
				</div>

				<div className='home_img-hover'></div>
			</section>
		</main>
	);
};

export default Home;
