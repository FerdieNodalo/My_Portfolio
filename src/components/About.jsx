const About = () => {
	return (
		<section className='about' id='about'>
			<div className='about_img'>
				<img src={require('../assets/image/about_img.png')} alt='my-pic' />
				<div className='about_info-layer'>
					<p>
						Name: <span>Ferdie Nodalo</span>
					</p>
					<p>
						Age: <span>21</span>
					</p>
					<p>
						Status: <span>Married</span>
					</p>
					<p>
						Birthday: <span>July 05, 2001</span>
					</p>
					<p>
						Address: <span>Ipil, Zamboanga Sibugay</span>
					</p>
					<p>
						Zodiac-Sign: <span>Cancer</span>
					</p>
				</div>
			</div>

			<div className='about_text'>
				<h2>
					About <span>Me</span>
				</h2>
				<h4>Full Stack Developer!</h4>
				<p>
					Throughout my journey at KodeGo, I gained invaluable knowledge and
					hands-on experience in various programming languages and frameworks.
					This comprehensive training has equipped me with the necessary tools
					to deliver high-quality code and develop robust applications. I am
					driven by a deep curiosity for problem-solving and a determination to
					continuously learn and grow in the ever-evolving field of technology.
					I thrive in collaborative environments and embrace challenges as
					opportunities for personal and professional development.
				</p>
				<div className='btn_box'>
					<a
						href='https://www.facebook.com/kafrederick.nodalo/about'
						className='btn'
						id='about-btn'
					>
						More About
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
