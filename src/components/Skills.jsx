const Skills = () => {
	return (
		<section className='skills' id='skills'>
			<h2 className='skills_heading'>
				My <span>Skills</span>
			</h2>

			<div className='skills_row'>
				<div className='skills_column'>
					<h3 className='title'>
						Coding <span>Skills</span>
					</h3>
					<div className='skills_box'>
						<div className='skills_content'>
							<div className='progress'>
								<h3>
									HTML <span>90%</span>
								</h3>
								<div className='bar'>
									<span></span>
								</div>
							</div>
							<div className='progress'>
								<h3>
									CSS <span>85%</span>
								</h3>
								<div className='bar'>
									<span></span>
								</div>
							</div>
							<div className='progress'>
								<h3>
									Bootstrap <span>85%</span>
								</h3>
								<div className='bar'>
									<span></span>
								</div>
							</div>
							<div className='progress'>
								<h3>
									JavaScript <span>80%</span>
								</h3>
								<div className='bar'>
									<span></span>
								</div>
							</div>
							<div className='progress'>
								<h3>
									M.E.R.N <span>80%</span>
								</h3>
								<div className='bar'>
									<span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='skills_column'>
					<h3 className='title'>
						Professional <span>Skills</span>
					</h3>
					<div className='skills_box'>
						<div className='skills_content'>
							<div className='progress'>
								<h3>
									Web Design <span>75%</span>
								</h3>
								<div className='bar'>
									<span></span>
								</div>
							</div>
							<div className='progress'>
								<h3>
									Web Development <span>80%</span>
								</h3>
								<div className='bar'>
									<span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
