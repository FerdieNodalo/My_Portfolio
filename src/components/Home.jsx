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
					<a
						href='https://doc-0g-bc-prod-03-apps-viewer.googleusercontent.com/viewer2/prod-03/pdf/e72pva9hd04dme3r50btk235krjs4260/p8nl3u4hm8his8eefsuirpqaa4uks6ro/1688378850000/3/113735566463961790360/APznzaYFMljmvjJ83OAOx7CuzGq_LB6UHDKGO8DcddxEWS2l_qvig0EbQWGdMCo4MLjJObRHPtWfX8_sAlMjpLZqEADXk0dft29bImo4qU468VOgUZdPyLuMerR6bWO-kW4lQxRaCUGUZISx9D3C25GO9nHFJlTaBTD3k3znnbL5NPh0Vn_IlXJCT49-Hp8CvmgjdrWbFFc76h1ib4A391IJbTmYT6OAw21piCGBGTDjnsDDrvr13SdfaIuOcISDQuNbHJIsUcfbNzjmWhbJoCzSxWnW5gpY_RWdYK9V8hCxm-ifxPl-5hhVFB-tSfLztuKKUjdw9n8Ib1wXOHW6LcsowhflPKaFuQyZ_hNvIGZwzgK2vv-xTS3UefQKZKUsTF6a9rTVV-IXCRT9DaD98pdaWdJjogjPDw==?authuser=0&nonce=4a3hn8io7o9cu&user=113735566463961790360&hash=urt2i7mqomfrkdjruk2onpcd4phqlmhd'
						className='btn'
					>
						Download CV
					</a>
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
