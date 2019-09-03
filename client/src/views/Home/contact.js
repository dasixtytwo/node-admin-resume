import React, { Fragment } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import ShowMap from "components/map/showMap";
import { TiMail } from "react-icons/ti";

export default function HomeContact({ dataProfile }) {
	const { profiles, isLoading } = dataProfile;
	return (
		<Fragment>
			{profiles &&
				!isLoading &&
				profiles.map(profile => (
					<div
						key="contactPage"
						id="contact"
						className="section padding-v-60 min-fullheight"
					>
						{/*-- BG Map --*/}
						<ShowMap location={profile.location} />
						{/*-- Contact Box --*/}
						<ScrollAnimation
							animateIn="flipInY"
							className="contact-box bg-secondary dark"
						>
							<h1>
								Don’t hesitate to <strong>contact me</strong>!
							</h1>
							{/*-- Contact List --*/}
							<ul className="list-unstyled list-unstyled-icons">
								<li>
									<i className="inline-icon icon-before-and-after text-primary fa fa-map-marker" />
									{profile.location.address},
									<br />
									{profile.location.city},
									<br />
									{profile.location.postcode}, {profile.location.country}
								</li>
								<li>
									<i className="inline-icon icon-before-and-after text-primary fa fa-comment" />
									<a href="/">{profile.user.email}</a>
								</li>
								<li>
									<i className="inline-icon icon-before-and-after text-primary fa fa-phone" />
									{profile.mobile}
								</li>
							</ul>
							<a href="/" className="btn btn-primary" data-target="messenger">
								<span>Use Contact Form</span>
								<TiMail />
							</a>
							<h5 className="margin-t-60">Check my social media!</h5>
							<ul className="list-inline">
								<li>
									<a
										href="/"
										className="icon icon-circle icon-xs icon-facebook"
									>
										<i className="fa fa-facebook" />
									</a>
								</li>
								<li>
									<a href="/" className="icon icon-circle icon-xs icon-twitter">
										<i className="fa fa-twitter" />
									</a>
								</li>
								<li>
									<a
										href="/"
										className="icon icon-circle icon-xs icon-google-plus"
									>
										<i className="fa fa-twitter" />
									</a>
								</li>
							</ul>
							<h5>Like me on Facebook</h5>
							{/*-- FB Like --*/}
							<div
								className="fb-like"
								data-href="http://www.facebook.com/davideagosti"
								data-layout="button_count"
								data-action="like"
								data-show-faces="false"
								data-share="false"
							/>
						</ScrollAnimation>
					</div>
				))}
		</Fragment>
	);
}
