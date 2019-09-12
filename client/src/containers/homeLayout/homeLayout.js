/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfiles } from "actions/profileActions";
import { getPosts } from "actions/postActions";
import { getProjects } from "actions/portfolioActions";
import {
  Element,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
// Import View Sections
import Header from "../../views/home/header";
import HomePage from "views/home/homePage";
import HomeAbout from "../../views/home/about";
import HomePortfolio from "../../views/home/portfolio";
import HomePost from "../../views/home/posts";
import HomeContact from "../../views/home/contact";
import Spinner from "../../components/loader/loader";
import ContactForm from "../../components/contact/contactForm";

function HomeLayout() {
  const fetchData = useSelector(state => state);
  const dispatch = useDispatch();

  const { profile, post, project } = fetchData;

  useEffect(() => {
    dispatch(getProfiles());
    dispatch(getPosts());
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <Fragment>
      {profile.isLoading === true && <Spinner />}
      {profile.isLoading === false && (
        <Fragment>
          <div id="header" className="bg-white hidden-sm hidden-xs">
            <Header dataProfile={profile} />
          </div>
          <div id="content" className="bg-white">
            {/* -- Section - Home -- */}
            <Element name="start" className="element">
              <HomePage dataProfile={profile} />
            </Element>
            {/* -- Section - Resume -- */}
            <Element name="resume" className="element">
              <HomeAbout dataProfile={profile} />
            </Element>
            {/* -- Section - Portfolio -- */}
            <Element name="portfolio" className="element">
              <HomePortfolio dataProject={project} />
            </Element>
            {/* -- Section - Blog -- */}
            <Element name="posts" className="element">
              <HomePost dataPost={post} />
            </Element>
            {/* -- Section - Contact -- */}
            <Element name="contact" className="element">
              <HomeContact dataProfile={profile} />
            </Element>
          </div>
          <ContactForm />
        </Fragment>
      )}
    </Fragment>
  );
}

export default HomeLayout;
