const About = () => {
	return (
		<section className='about' id='about'>
			<div className='about_img-container'>
				<div className='about_img'>
					<img src={require('../assets/image/about_img.png')} alt='my-pic' />
				</div>
			</div>

			<div className='about_text'>
				<h2>
					About <span>Me</span>
				</h2>
				<h5>My Journey in a Nutshell</h5>
				<p>
					Hey there! I'm Ferdie Nodalo, a 22-year-old who embarked on an
					exciting coding adventure. Picture this: stumbling upon KodeGo, this
					awesome platform that promised to teach coding to newcomers like me –
					no fancy degrees needed. Intrigued, I jumped in, and guess what? I not
					only embraced it but excelled, proudly graduated on June 26, 2023.
				</p>
				<p>
					KodeGo's boot camp was an exhilarating rollercoaster ride. I got my
					hands dirty building web apps – not one, but two mini projects! And
					the cherry on top? I aced the capstone project. It's like conjuring
					digital magic with the M.E.R.N Stack. From ground zero to crafting
					impressive web apps, that was my journey.
				</p>
				<p>
					Here's the real deal: I might be a newbie, but my passion for web
					development burns bright. I'm a sponge, always soaking up new
					knowledge. Aim? Becoming a full-stack pro. There's no stopping me. I'm
					chasing the title of the best, and that's the flame that sets me apart
					in this coding jungle.
				</p>
				<p>
					Oh, and here's a little tidbit: I'm thrilled to share that I emerged
					as one of the top students in our batch. Impressed? Let's connect
					through the links in my contact page. Got queries or itching to
					brainstorm? Let's chat, let's collaborate, and together, let's bring
					digital ideas to life!
				</p>
			</div>
		</section>
	);
};

export default About;
