import React, { Fragment } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Button } from "antd";
import { TiDocument, TiArrowDown } from "react-icons/ti";
import backgrounImg from "assets/images/it-bg01.jpg";

export default function HomePage({ dataProfile }) {
	const { profiles, isLoading } = dataProfile;
	return (
		<Fragment>
			{/*(profiles === null || loading) && (
				<div>
					<h2>Loading...</h2>
				</div>
			)*/}
			{profiles && !isLoading && (
				<div
					id="start"
					className="section fullheight bg-secondary dark padding-v-60"
				>
					{/* -- BG Image -- */}
					<ScrollAnimation
						animateIn="fadeIn"
						animateOnce={true}
						className="bg-image"
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
									<Button
										type="primary"
										size="large"
										shape="round"
										href="#resume"
									>
										<span>Go to my resume!</span>
										<TiArrowDown size="1.5em" />
									</Button>
								</span>
								<Button type="link" href="/">
									<span>Download my CV</span>
									<TiDocument size="1.5em" />
								</Button>
							</div>
						</Fragment>
					))}
				</div>
			)}
		</Fragment>
	);
}
