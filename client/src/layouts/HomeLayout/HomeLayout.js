/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import {
	Element,
	animateScroll as scroll,
	scrollSpy,
	scroller
} from "react-scroll";
// Import View Sections
import Header from "views/Home/header";
import HomePage from "views/Home/homePage";
import HomeAbout from "views/Home/about";
import HomePortfolio from "views/Home/portfolio";
import HomePost from "views/Home/posts";
import HomeContact from "views/Home/contact";

function HomeLayout() {
	return (
		<Fragment>
			<div id="header" className="">
				<Header />
			</div>
			<div id="content" className="">
				{/* -- Section - Home -- */}
				<Element name="home" className="element">
					<HomePage />
				</Element>
				{/* -- Section - Resume -- */}
				<Element name="resume" className="element">
					<HomeAbout />
				</Element>
				{/* -- Section - Portfolio -- */}
				<Element name="portfolio" className="element">
					<HomePortfolio />
				</Element>
				{/* -- Section - Blog -- */}
				<Element name="posts" className="element">
					<HomePost />
				</Element>
				{/* -- Section - Contact -- */}
				<Element name="contact" className="element">
					<HomeContact />
				</Element>
			</div>
		</Fragment>
	);
}

export default HomeLayout;
