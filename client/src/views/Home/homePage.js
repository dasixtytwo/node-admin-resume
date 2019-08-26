import React, { Fragment } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import backgrounImg from "assets/images/it-bg01.jpg";

export default function HomePage({ profiles }) {
	return (
		<Fragment>
			{/*(profiles === null || loading) && (
				<div>
					<h2>Loading...</h2>
				</div>
			)*/}
			{profiles && (
				<div
					id="start"
					className="section fullheight bg-secondary dark padding-v-60"
				>
					{/* -- BG Image -- */}
					<ScrollAnimation
						animateIn="zoomIn"
						className="bg-image infinite zooming"
					>
						<img src={backgrounImg} alt="..." />
					</ScrollAnimation>

					{profiles.map((profile, i) => (
						<Fragment key={`profile-${i}`}>
							<div className="container container-wide text-md">
								<i className="icon-before fa fa-comments text-primary" />
								Have you got any questions? Write to me at{" "}
								<a
									href="mailto:davide.a@davideagosti.info"
									className="text-primary"
								>
									{profile.user.email}
								</a>
							</div>
							<div className="container container-wide v-bottom padding-v-80">
								<h1 className="text-lg margin-b-0">
									Hi! I’m <strong>{profile.user.name}</strong>
								</h1>
								<h5 className="text-tertiary margin-b-40">
									experienced Frontend / Web developer
								</h5>
								<span data-target="local-scroll">
									<a href="#resume" className="btn btn-lg btn-primary">
										<span>Go to my resume!</span>
										<i className="ti-arrow-down" />
									</a>
								</span>
								<a href="/" className="btn btn-link">
									<span>Download my CV</span>
									<i className="ti-file" />
								</a>
							</div>
						</Fragment>
					))}
				</div>
			)}
		</Fragment>
	);
}
