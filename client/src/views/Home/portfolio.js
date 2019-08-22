import React from "react";

export default function HomePortfolio() {
  return (
    <div id="portfolio" className="section bg-grey padding-v-60">
      {/*-- Content --*/}
      <div className="container container-wide">
        <h6 className="margin-b-50">Portfolio</h6>

        {/*-- Filters --*/}
        <nav className="text-center">
          <ul
            className="nav nav-filter nav-pills margin-b-40"
            data-filter-grid="#portfolio-list"
          >
            <li className="active">
              <a href="#" data-filter="*">
                All
              </a>
            </li>
            <li>
              <a href="#" data-filter=".webdesign">
                Webdesign
              </a>
            </li>
            <li>
              <a href="#" data-filter=".development">
                Development
              </a>
            </li>
            <li>
              <a href="#" data-filter=".graphic">
                Graphic Design
              </a>
            </li>
          </ul>
        </nav>

        <div id="portfolio-list" className="row masonry">
          {/*-- Masonry Sizer --*/}
          <div className="masonry-sizer col-lg-3 col-sm-6 col-xs-12" />

          {/*-- Masonry Element --*/}
          <div className="webdesign masonry-item margin-b-30 col-lg-6 col-sm-12 col-xs-12">
            <div className="gallery-item">
              <div className="item-photo">
                <a
                  href="/"
                  data-target="ajax-modal"
                >
                  <img src="assets/img/projects/project-square01.jpg" alt="" />
                </a>
                <div className="item-hover bg-dark dark">
                  <div className="item-hover-content">
                    <a
                      href="/"
                      data-target="ajax-modal"
                      className="icon icon-sm icon-hover icon-circle icon-primary"
                    >
                      <i className="fa fa-link" />
                    </a>
                    <a
                      href="http://davideagosti.info"
                      target="_blank"
                      className="icon icon-sm icon-circle icon-white icon-hover"
                    >
                      <i className="fa fa-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item-title">
                <a href="/" className="title">
                  Corporate Identity Mockup
                </a>
                <span className="caption text-muted">Mockups</span>
              </div>
            </div>
          </div>
          {/*-- Masonry Element --*/}
          <div className="development masonry-item margin-b-30 col-lg-3 col-sm-6 col-xs-12">
            <div className="gallery-item">
              <div className="item-photo">
                <a
                  href="/"
                  data-target="ajax-modal"
                >
                  <img src="assets/img/projects/project-square02.jpg" alt="" />
                </a>
                <div className="item-hover bg-dark dark">
                  <div className="item-hover-content">
                    <a
                      href="/"
                      data-target="ajax-modal"
                      className="icon icon-sm icon-hover icon-circle icon-primary"
                    >
                      <i className="fa fa-link" />
                    </a>
                    <a
                      href="http://davideagosti.info"
                      target="_blank"
                      className="icon icon-sm icon-circle icon-white icon-hover"
                    >
                      <i className="fa fa-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item-title">
                <a href="/" className="title">
                  Corporate Identity Mockup
                </a>
                <span className="caption text-muted">Mockups</span>
              </div>
            </div>
          </div>
          {/*-- Masonry Element --*/}
          <div className="graphic masonry-item margin-b-30 col-lg-3 col-sm-6 col-xs-12">
            <div className="gallery-item">
              <div className="item-photo">
                <a
                  href="/"
                  data-target="ajax-modal"
                >
                  <img
                    src="assets/img/projects/project-vertical01.jpg"
                    alt=""
                  />
                </a>
                <div className="item-hover bg-dark dark">
                  <div className="item-hover-content">
                    <a
                      href="/"
                      data-target="ajax-modal"
                      className="icon icon-sm icon-hover icon-circle icon-primary"
                    >
                      <i className="fa fa-link" />
                    </a>
                    <a
                      href="http://davideagosti.info"
                      target="_blank"
                      className="icon icon-sm icon-circle icon-white icon-hover"
                    >
                      <i className="fa fa-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="item-title">
                <a href="/" className="title">
                  Corporate Identity Mockup
                </a>
                <span className="caption text-muted">Mockups</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
