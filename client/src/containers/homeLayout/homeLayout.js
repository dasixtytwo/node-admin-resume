/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfiles } from "actions/profileActions";
import { getPosts } from "actions/postActions";
import {
	Element,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";
// Import View Sections
import Header from "views/home/header";
import HomePage from "views/home/homePage";
import HomeAbout from "views/home/about";
import HomePortfolio from "views/home/portfolio";
import HomePost from "views/home/posts";
import HomeContact from "views/home/contact";

function HomeLayout() {
	const dataProfile = useSelector(state => state.profile);
	const dataPost = useSelector(state => state.post);
	const dispatch = useDispatch();

	const { profiles, loading } = dataProfile;
	const { post, posts } = dataPost;

	useEffect(() => {
		dispatch(getProfiles());
	}, []);

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	return (
		<Fragment>
			{/* -- Loader -- */}
			{loading && <div id="page-loader" className="bg-white"></div>}
			{/* -- Header -- */}
			<div id="header" className="bg-white hidden-sm hidden-xs">
				<Header profiles={profiles} />
			</div>
			{/* -- Start Sections -- */}
			<div id="content" className="bg-white">
				{/* -- Section - Home -- */}
				<Element name="start" className="element">
					<HomePage profiles={profiles} />
				</Element>
				{/* -- Section - Resume -- */}
				<Element name="resume" className="element">
					<HomeAbout profiles={profiles} />
				</Element>
				{/* -- Section - Portfolio -- */}
				<Element name="portfolio" className="element">
					<HomePortfolio />
				</Element>
				{/* -- Section - Blog -- */}
				<Element name="posts" className="element">
					<HomePost posts={dataPost} />
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
