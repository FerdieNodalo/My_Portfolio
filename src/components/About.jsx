const About = () => {
	return (
		<section className='about' id='about'>
			<div className='about_img'>
				<img src={require('../assets/image/about_img.png')} alt='my-image' />
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
					<button className='btn'>More About</button>
				</div>
			</div>
		</section>
	);
};

export default About;
