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
								<i className='bx bxl-react'></i> ReactJS
							</li>
							<li>ExpressJS</li>
							<li>
								<i className='bx bxl-nodejs'></i> NodeJS
							</li>
							<li>
								<i className='bx bxl-mongodb'></i> MongoDB
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
