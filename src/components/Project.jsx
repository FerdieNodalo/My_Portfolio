const Project = () => {
	return (
		<section className='projects' id='projects'>
			<h2 className='projects_heading'>
				Latest <span>Projects</span>
			</h2>

			<div className='projects_container'>
				<div className='project_text-container'>
					<div className='project_headings'>
						<p>Featured Project</p>
						<h2>
							<a href='https://short-link-lyart.vercel.app/'>
								URL shortening API landing page
							</a>
						</h2>
					</div>
					<div className='project_contents'>
						<p>
							Seamlessly integrate with the
							<a href='https://shrtco.de/tools/shorten'> shrtcode</a> URL
							shortening API for streamlined link transformation. Converting
							long URLs into concise, shareable links.
						</p>
						<ul className='technologies_used'>
							<li>
								<i className='bx bxl-react'></i> <span>ReactJS</span>
							</li>
							<li>
								<span>API</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='project_image-container'>
					<a href='https://short-link-lyart.vercel.app/'>
						<img
							src={require('../assets/image/url_shortening_api.png')}
							alt=''
						/>
					</a>
				</div>
			</div>

			<div className='projects_container'>
				<div className='project_text-container'>
					<div className='project_headings'>
						<p>Featured Project</p>
						<h2>
							<a href='https://classroom-app-fe.vercel.app/'>
								Classroom Management App
							</a>
						</h2>
					</div>
					<div className='project_contents'>
						<p>
							It is a website application that helps teachers to manage and
							check the students task.
						</p>
						<ul className='technologies_used'>
							<li>
								<i className='bx bxl-react'></i> <span>ReactJS</span>
							</li>
							<li>
								<span>ExpressJS</span>
							</li>
							<li>
								<i className='bx bxl-nodejs'></i> <span>NodeJS</span>
							</li>
							<li>
								<i className='bx bxl-mongodb'></i> <span>MongoDB</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='project_image-container'>
					<a href='https://classroom-app-fe.vercel.app/'>
						<img
							src={require('../assets/image/capstone_project_img.png')}
							alt=''
						/>
					</a>
				</div>
			</div>

			<div className='more_projects'>
				<a href='https://ferdienodalo.github.io/Web_Development_Projects/'>
					See more of my projects
				</a>
			</div>
		</section>
	);
};

export default Project;
