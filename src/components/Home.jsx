const Home = () => {
	return (
		<main className='home' id='home'>
			<section className='home_content'>
				<div className='left_col'>
					<div className='text_content'>
						<h1>
							Hi, I'm <span>Ferdie Nodalo</span>
						</h1>

						<div className='text_animate'>
							<h3>Full-Stack Web Developer</h3>
						</div>

						<p>
							I love coding and take a professional approach to my work. I am
							dedicated to expanding my skills and knowledge to grow as a web
							developer in this dynamic field.
						</p>

						<div className='btn_box'>
							<a href='#projects' className='projects_btn'>
								Explore My Projects
							</a>
							<span>or</span>
							<a href='#contact' className='hire_me-btn'>
								Hire Me
							</a>
						</div>
					</div>
				</div>

				<div className='right_col'>
					<div className='home_img-hover'></div>
				</div>
			</section>
		</main>
	);
};

export default Home;
