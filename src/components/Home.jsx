const Home = () => {
	return (
		<main className='home' id='home'>
			<section className='home_content'>
				<h1>
					Hi, I'm <span>Ferdie Nodalo</span>
				</h1>
				<div className='text_animate'>
					<h3>Full Stack Developer</h3>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eius
					ratione ipsam quasi quia, quisquam, rerum et illo provident blanditiis
					recusandae? Nesciunt tempora velit placeat ipsum dolores?
				</p>
				<div className='btn_box'>
					<button href='#' className='btn'>
						Hire me
					</button>
					<button href='#' className='btn'>
						Lets talk
					</button>
				</div>

				<div className='home_sci'>
					<a href='#'>
						<i className='bx bxl-facebook'></i>
					</a>
					<a href='#'>
						<i class='bx bxl-linkedin-square'></i>
					</a>
					<a href='#'>
						<i class='bx bxl-gmail'></i>
					</a>
				</div>
			</section>
		</main>
	);
};

export default Home;
