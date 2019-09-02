/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfiles } from "actions/profileActions";
import { getPosts } from "actions/postActions";
import { getProjects } from "actions/portfolioActions";
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
import Spinner from "components/loader/loader";
import ContactForm from "components/contact/contactForm";

function HomeLayout() {
	const dataProfile = useSelector(state => state.profile);
	const dataPost = useSelector(state => state.post);
	const dataProject = useSelector(state => state.project);
	const dispatch = useDispatch();

	const { loading, profiles } = dataProfile;

	useEffect(() => {
		dispatch(getProfiles());
	}, []);

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	useEffect(() => {
		dispatch(getProjects());
	}, []);

	return (
		<Fragment>
			{loading ? (
				<Spinner />
			) : (
				<Fragment>
					<div id="header" className="bg-white hidden-sm hidden-xs">
						<Header profiles={profiles} isLoading={loading} />
					</div>
					<div id="content" className="bg-white">
						{/* -- Section - Home -- */}
						<Element name="start" className="element">
							<HomePage profiles={profiles} isLoading={loading} />
						</Element>
						{/* -- Section - Resume -- */}
						<Element name="resume" className="element">
							<HomeAbout profiles={profiles} isLoading={loading} />
						</Element>
						{/* -- Section - Portfolio -- */}
						<Element name="portfolio" className="element">
							<HomePortfolio dataProjects={dataProject} />
						</Element>
						{/* -- Section - Blog -- */}
						<Element name="posts" className="element">
							<HomePost posts={dataPost} isLoading={loading} />
						</Element>
						{/* -- Section - Contact -- */}
						<Element name="contact" className="element">
							<HomeContact profiles={profiles} isLoading={loading} />
						</Element>
					</div>
					<ContactForm />
				</Fragment>
			)}
		</Fragment>
	);
}

export default HomeLayout;
