import React from "react";

import backgrounImg from "assets/images/backgrounds/bg-1.jpg";

export default function HomePage() {
	return (
		<div
			id="start"
			className="section fullheight bg-secondary dark padding-v-60"
		>
			{/* -- BG Image -- */}
			<div className="bg-image animated infinite zooming">
				<img src={backgrounImg} alt="..." />
			</div>

			{/*-- Top --*/}
			<div className="container container-wide text-md">
				<i className="icon-before fa fa-comments text-primary" />
				Have you got any questions? Write to me at{" "}
				<a href="mailto:davide.a@davideagosti.info" className="text-primary">
					davide.a@davideagosti.info
				</a>
			</div>

			{/*-- Middle --*/}
			<div className="container container-wide v-bottom padding-v-80">
				<h1 className="text-lg margin-b-0">
					Hi! I’m <strong>Davide Agosti</strong>
				</h1>
				<h5 className="text-tertiary margin-b-40">
					experienced Frontend / Web developer
				</h5>
				<span data-target="local-scroll">
					<a
						href="#resume"
						className="btn btn-lg btn-primary animated"
						data-animation="bounceIn"
					>
						<span>Go to my resume!</span>
						<i className="ti-arrow-down" />
					</a>
				</span>
				<a href="/" className="btn btn-link">
					<span>Download my CV</span>
					<i className="ti-file" />
				</a>
			</div>
		</div>
	);
}
