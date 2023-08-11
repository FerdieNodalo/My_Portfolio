import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_wefxwwp',
				'template_p3m5yyg',
				form.current,
				'8oTGmqU7yBm3THduf'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};
	return (
		<section className='contact' id='contact'>
			<div className='contact_text'>
				<h2>
					Contact <span>Me</span>
				</h2>
				<p>
					I'm always open to opportunities and finding ways to improve myself.
					If you think I can provide any value for you in any way, you can also
					find me on the following sites.
				</p>

				<ul>
					<li>
						<i className='bx bxl-github'></i>
						<a href='https://github.com/FerdieNodalo'>Github</a>
					</li>
					<li>
						<i className='bx bxl-linkedin-square'></i>
						<a href='https://www.linkedin.com/in/ferdie-nodalo-38a092270/'>
							LinkedIn
						</a>
					</li>
					<li>
						<span className='frontend_mentor-logo'>
							<svg
								width='24'
								height='24'
								xmlns='http://www.w3.org/2000/svg'
								class=''
							>
								<path d='M12.17 1.272a.732.732 0 0 0-.718.732v13.914a.732.732 0 0 0 .732.732.732.732 0 0 0 .732-.732V2.004a.732.732 0 0 0-.745-.732zM23.246 5.44a.734.734 0 0 0-.277.063l-6.282 2.804a.733.733 0 0 0 0 1.336l6.282 2.813a.738.738 0 0 0 .3.065.732.732 0 0 0 .297-1.4L18.78 8.976l4.786-2.137a.734.734 0 0 0 .37-.966.734.734 0 0 0-.69-.433zm-22.5 5.032a.732.732 0 0 0-.722.915c1.736 6.677 7.775 11.341 14.683 11.341a.732.732 0 0 0 0-1.464A13.706 13.706 0 0 1 1.44 11.02a.732.732 0 0 0-.694-.547z'></path>
							</svg>
						</span>
						<a href='https://www.frontendmentor.io/profile/FerdieNodalo'>
							Frontend Mentor
						</a>
					</li>
					<li>
						<i className='bx bxl-facebook-circle'></i>
						<a href='https://www.facebook.com/kafrederick.nodalo/'>Facebook</a>
					</li>
				</ul>
			</div>
			<div className='contact_form'>
				<form ref={form} onSubmit={sendEmail} action='contact'>
					<input
						type='text'
						name='user_name'
						placeholder='Enter your name'
						required
					/>
					<input
						type='email'
						name='user_email'
						placeholder='Enter your email'
						required
					/>
					<textarea
						cols='35'
						rows='10'
						name='message'
						placeholder='Enter your message here.'
						required
					></textarea>
					<div className='btn_box'>
						<button type='submit' className='contact_btn'>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
