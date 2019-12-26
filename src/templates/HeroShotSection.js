import React from 'react';

function HeroShotSection() {
	return (
		<div className="heroshot-wrapper flex align-items-center justify-content-center">
			<div className="y-logo-white">
				<img src={process.env.PUBLIC_URL + '/y-logo-white.png'} className="main-logo" height="30" alt="logo cermati" />
			</div>
			<div className="y-text-white shootout">
				<div className="half-bottom-margin">
					<div className="name-type-one">Hello! I'm Farid Aulia Tanjung</div>
					<div className="attr-type-one">Consult, Design, and Develop Websites</div>
				</div>
				<div>Have something great in mind? Feel free to contact me.</div>
				<div>I'll help you to make it happen.</div>
				<button className="overlay-action">Let's Make Contact</button>
			</div>
		</div>
	);
}

export default HeroShotSection;