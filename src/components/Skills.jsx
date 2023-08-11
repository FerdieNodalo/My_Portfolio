const Skills = () => {
	return (
		<section className='skills' id='skills'>
			<h2 className='skills_heading'>
				My <span>Skills</span>
			</h2>

			<div className='core_skill-container'>
				<h4>Core Skills</h4>
				<h5>Web Development</h5>
				<ul className='core_skills'>
					<li>
						<i className='bx bxl-html5'></i> HTML5
					</li>
					<li>
						<i className='bx bxl-css3'></i> CSS3
					</li>
					<li>
						<i className='bx bxl-javascript'></i> VanillaJS
					</li>
					<li>
						<i className='bx bxl-react'></i> ReactJS
					</li>
					<li>
						<i className='bx bxl-nodejs'></i> NodeJS
					</li>
				</ul>
			</div>
			<div className='tech_skill-container'>
				<h4>Tech Skills</h4>
				<div className='tech_skills'>
					<div className='frontend_container'>
						<h5>Frontend Development</h5>
						<ul>
							<li>
								<i className='bx bxl-html5'></i> HTML5
							</li>
							<li>
								<i className='bx bxl-css3'></i> CSS3
							</li>
							<li>
								<i className='bx bxl-bootstrap'></i> Bootstrap
							</li>
							<li>
								<i className='bx bxl-javascript'></i> VanillaJS
							</li>
							<li>
								<i className='bx bxl-react'></i> ReactJS
							</li>
							<li>
								<i className='bx bxl-jquery'></i> jQuery
							</li>
							<li>EJS</li>
						</ul>
					</div>
					<div className='backend_container'>
						<h5>Backend Development</h5>
						<ul>
							<li>
								<i className='bx bxl-nodejs'></i> NodeJS
							</li>
							<li>Mongoose</li>
							<li>ExpressJS</li>
							<li>REST Api</li>
						</ul>
					</div>

					<div className='database_container'>
						<h5>Database</h5>
						<ul>
							<li>
								<i className='bx bxl-mongodb'></i> MongoDB
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
