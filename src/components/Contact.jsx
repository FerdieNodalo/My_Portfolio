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
				<h4>If you want to have an interview with me.</h4>
				<p>
					I'm a web developer - crafting powerful and dynamic websites and web
					applications for clients worldwide.
				</p>

				<div className='contact_list'>
					<li>
						<a href='my-number'>0956 - 227 - 4182</a>
					</li>
					<li>
						<a href='https://www.google.com/gmail/about/'>
							ferdienodalo7@gmail.com
						</a>
					</li>
					<li>
						<a href='https://www.facebook.com/kafrederick.nodalo/'>
							Ferdie Nodalo
						</a>
					</li>
				</div>
				<div className='contact_icons'>
					<a href='https://www.facebook.com/kafrederick.nodalo/'>
						<i className='bx bxl-facebook-square'></i>
					</a>
					<a href='https://www.linkedin.com/in/ferdie-nodalo-38a092270/'>
						<i className='bx bxl-linkedin-square'></i>
					</a>
					<a href='https://github.com/FerdieNodalo'>
						<i className='bx bxl-github'></i>
					</a>
				</div>
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
					<input
						type='number'
						name='user_number'
						placeholder='Enter your mobile number'
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
						<button type='submit' className='btn'>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
