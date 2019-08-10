/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import {
	Element,
	animateScroll as scroll,
	scrollSpy,
	scroller
} from "react-scroll";
// Import View Sections
import HomeHeader from "views/Home/header";
import HomeAbout from "views/Home/about";

function HomeLayout() {
	return (
		<Fragment>
			{/* -- MAIN HEADER -- */}
			<Element name="home" className="element">
				<HomeHeader />
			</Element>
			{/* -- ABOUT ME -- */}
			<Element name="about" className="element">
				<HomeAbout />
			</Element>
		</Fragment>
	);
}

export default HomeLayout;
