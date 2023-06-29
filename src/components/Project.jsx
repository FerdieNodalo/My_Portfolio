const Project = () => {
	return (
		<section className='projects' id='projects'>
			<h2 className='projects_heading'>
				Latest <span>Projects</span>
			</h2>

			<div className='projects_container'>
				<div className='projects_box'>
					<img
						src={require('../assets/image/sample_projects_ing.jpg')}
						alt='my-projects'
					/>
					<div className='projects_layer'>
						<h4>Classroom App</h4>
						<p>Capstone-Project</p>
						<p>KodeGo</p>
						<a href='https://classroom-app-fe.vercel.app/'>
							<i className='bx bx-link-external'></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Project;
