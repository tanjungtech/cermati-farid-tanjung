import React, { useState } from 'react';

function NewsletterPanel(props) {
	const {setHide, hideNews} = props;
	const [emailNews, setEmail] = useState("");
	return (
		<div className={hideNews ? `hide-bottom newsletter-panel` : `newsletter-panel` }>
			<div className="np-wrapper">
				<div className="close-newsletter">
					<button className="closebtn-newsletter" onClick={setHide("hideNews")}>x</button>
				</div>
				<div className="attr-type-one" >Get latest updates in web technologies</div>
				<div>I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.
				</div>
				<form method="post" name="newsletter-post" id="newsletter-post">
					<div className="flex flex-wrapper">
						<div className="col-md-8 fullblock">
							<input type="text" className="newsletter-input" placeholder="Email address" value={emailNews} onChange={(e) => setEmail(e.target.value)} />
						</div>
						<div className="col-md-4 fullblock">
							<button className="orange-bg newsletter-button">Count me in!</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default NewsletterPanel;