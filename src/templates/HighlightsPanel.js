import React from 'react';

const highlights = [
	{
		title: `Consult`,
		desc: `Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.`,
		icon:  [<i className="far fa-comments" key={'fa-comments'} ></i>]
	},
	{
		title: `Design`,
		desc: `Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.`,
		icon: [<i className="fas fa-paint-brush" key={'fa-paint-brush'} ></i>]
	},
	{
		title: `Develop`,
		desc: `Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.`,
		icon: [<i className="fas fa-cubes" key={'fa-cubes'} ></i>]
	},
	{
		title: `Marketing`,
		desc: `Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.`,
		icon: [<i className="far fa-paper-plane" key={'fa-paper-plane'} ></i>]
	},
	{
		title: `Manage`,
		desc: `Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.`,
		icon: [<i className="fas fa-sliders-h" key={'fa-sliders-h'}></i>]
	},
	{
		title: `Evolve`,
		desc: `Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.`,
		icon: [<i className="fas fa-chart-line" key={'fa-chart-line'} ></i>]
	}
]

const HighlightsPanel = () => {
	const contents = highlights
	return (
		<div className="container">
			<div className="flex justify-content-center text-align-center two-bottom-margin">
				<div className="shootout">
					<h3>How Can I Help You?</h3>
					<div>Our work then targeted, best practices outcomes social innovation synergy. Venture philanthropy, revolutionary inclusive policymaker relief. User-centered program areas scale.</div>
				</div>
			</div>
			<div className="flex-wrapper flex justify-content-center">
				{
					contents.map( (content, index) => {
						return (
							<div className="col-md-4 col-xs-6" key={index}>
								<div className="highlights-subsect">
									<div className="flex align-items-center title-highlights-subject justify-content-space-between" key={content.id} >{content.title}{content.icon}</div>
									<div>{content.desc}</div>
								</div>
							</div>
						)
					} )
				}
			</div>
		</div>
	);
}

export default HighlightsPanel;