import React from 'react';

function NotificationPanel(props) {
	const {setHide} = props
	return (
		<div className="notif-wrapper">
			<div className="notif-text">By accessing and using this website, you acknowledge that you have read and understand our <a href="/cookie-policy">Cookie Policy</a>, <a href="/privacy-policy">Privacy Policy</a>, and our <a href="/terms-of-service">Terms of Service</a>.
			</div>
			<div>
				<button className="notif-action blue-bg" onClick={setHide('hideNotif')} >Got it</button>
			</div>
		</div>
	);
}

export default NotificationPanel;