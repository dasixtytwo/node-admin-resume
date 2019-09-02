/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import {
	Link,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";

export default function HomeHeader({ profiles, isLoading }) {
	return (
		<Fragment>
			{/*(profiles === null || loading) && (
				<div>
					<h2>loading...</h2>
				</div>
			)*/}
			{profiles && !isLoading && (
				<Fragment>
					{/* -- Logo -- */}
					<div className="logo bg-primary">
						<h1 className="name">
							Davide <strong>Agosti</strong>
						</h1>
						<span className="caption text-secondary">
							FrontEnd / Web developer
						</span>
					</div>

					{/* -- Navigation -- */}
					<nav id="main-menu">
						<ul className="nav nav-vertical">
							<li>
								<Link
									activeClass="active"
									to="start"
									spy={true}
									smooth={true}
									duration={600}
								>
									<span>Home</span>
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									to="resume"
									spy={true}
									smooth={true}
									duration={600}
									offset={0}
								>
									<span>About</span>
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									to="portfolio"
									spy={true}
									smooth={true}
									duration={600}
									offset={0}
								>
									<span>Portfolio</span>
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									to="posts"
									spy={true}
									smooth={true}
									duration={600}
									offset={0}
								>
									<span>Blog</span>
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									to="contact"
									spy={true}
									smooth={true}
									duration={600}
									offset={0}
								>
									<span>Contact</span>
								</Link>
							</li>
						</ul>
					</nav>

					{/* -- Social Media -- */}
					<div className="social-media">
						<strong className="text-sm hidden-md">
							Check my social media!
						</strong>
						{profiles.map(profile => (
							<ul key="social-1" className="list-inline margin-t-10">
								<li>
									<a href={profile.social.facebook} className="icon icon-xs">
										<i className="fa fa-facebook text-muted" />
									</a>
								</li>
								<li>
									<a href={profile.social.twitter} className="icon icon-xs">
										<i className="fa fa-twitter text-muted" />
									</a>
								</li>
								<li>
									<a href={profile.social.googlePlus} className="icon icon-xs">
										<i className="fa fa-google-plus text-muted" />
									</a>
								</li>
							</ul>
						))}
					</div>
				</Fragment>
			)}
		</Fragment>
	);
}
