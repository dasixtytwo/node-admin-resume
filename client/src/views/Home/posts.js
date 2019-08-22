import React from "react";

export default function HomePost() {
  return (
    <div id="posts" className="section bg-grey padding-v-60">
      {/*-- Mcontent --*/}
      <div className="container container-wide">
        <h6 className="margin-b-50">Latest Posts</h6>

        <div className="row masonry">
          {/*-- Masonry Sizer --*/}
          <div className="masonry-sizer col-lg-4 col-sm-6 col-xs-12" />
          {/*-- Masonry Element / Post --*/}
          <article className="post post-item masonry-item col-lg-4 col-sm-6 col-xs-12">
            <div className="post-photo">
              <img src="assets/img/photos/post01.jpg" alt="..." />
            </div>
            <div className="post-content animated" data-animation="fadeInUp">
              <div className="meta">
                <span>
                  <i className="fa fa-comment" />
                  <a href="/">4</a>
                </span>
                <span>
                  <i className="fa fa-user" />
                  <a href="/">John Doe</a>
                </span>
                <span>
                  <i className="fa fa-tag" />
                  <a href="/">Webdevelopment</a>
                </span>
              </div>
              <div className="date">22 May, 2014</div>
              <h1>
                <a href="/">Awesome Seattle Cycle Trip</a>
              </h1>
              <p className="lead">Per sint eirmod expetenda te. Pro ne essent.</p>
              <p>
                Per ea tibique fabellas electram. Ea aliquam corpora vis. Ne
                quot civibus atomorum quo.{" "}
              </p>
              <a href="blog-post-vertical.html" className="btn btn-primary btn-xs">
                <span>Read more</span>
                <i className="ti-arrow-right" />
              </a>
            </div>
          </article>
          {/*-- Masonry Element / Post --*/}
          <article className="post post-item masonry-item col-lg-4 col-sm-6 col-xs-12">
            <div className="post-content animated" data-animation="fadeInUp">
              <div className="meta">
                <span>
                  <i className="fa fa-comment" />
                  <a href="/">4</a>
                </span>
                <span>
                  <i className="fa fa-user" />
                  <a href="/">John Doe</a>
                </span>
                <span>
                  <i className="fa fa-tag" />
                  <a href="/">Webdesign</a>
                </span>
              </div>
              <div className="date">22 May, 2014</div>
              <h1>
                <a href="/">Awesome Seattle Cycle Trip</a>
              </h1>
              <p className="lead">Per sint eirmod expetenda te. Pro ne essent.</p>
              <p>
                Per ea tibique fabellas electram. Ea aliquam corpora vis. Ne
                quot civibus atomorum quo.{" "}
              </p>
              <a href="blog-post-vertical.html" className="btn btn-primary btn-xs">
                <span>Read more</span>
                <i className="ti-arrow-right" />
              </a>
            </div>
          </article>
          {/*-- Masonry Element / Post --*/}
          <article className="post post-item masonry-item col-lg-4 col-sm-6 col-xs-12">
            <div className="post-photo">
              <img src="assets/img/photos/post02.jpg" alt="..." />
            </div>
            <div className="post-content animated" data-animation="fadeInUp">
              <div className="meta">
                <span>
                  <i className="fa fa-comment" />
                  <a href="/">4</a>
                </span>
                <span>
                  <i className="fa fa-user" />
                  <a href="/">John Doe</a>
                </span>
                <span>
                  <i className="fa fa-tag" />
                  <a href="/">Front-End Development</a>
                </span>
              </div>
              <div className="date">22 May, 2014</div>
              <h1>
                <a href="/">Awesome Seattle Cycle Trip</a>
              </h1>
              <p className="lead">Per sint eirmod expetenda te. Pro ne essent.</p>
              <p>
                Per ea tibique fabellas electram. Ea aliquam corpora vis. Ne
                quot civibus atomorum quo.{" "}
              </p>
              <a href="blog-post-vertical.html" className="btn btn-primary btn-xs">
                <span>Read more</span>
                <i className="ti-arrow-right" />
              </a>
            </div>
          </article>
          {/*-- Masonry Element / Post --*/}
          <article className="post post-item masonry-item col-lg-4 col-sm-6 col-xs-12">
            <div className="post-photo">
              <img src="assets/img/photos/post03.jpg" alt="..." />
            </div>
            <div className="post-content animated" data-animation="fadeInUp">
              <div className="meta">
                <span>
                  <i className="fa fa-comment" />
                  <a href="/">4</a>
                </span>
                <span>
                  <i className="fa fa-user" />
                  <a href="/">John Doe</a>
                </span>
                <span>
                  <i className="fa fa-tag" />
                  <a href="/">Webdevelopment</a>
                </span>
              </div>
              <div className="date">22 May, 2014</div>
              <h1>
                <a href="/">Awesome Seattle Cycle Trip</a>
              </h1>
              <p className="lead">Per sint eirmod expetenda te. Pro ne essent.</p>
              <p>
                Per ea tibique fabellas electram. Ea aliquam corpora vis. Ne
                quot civibus atomorum quo.{" "}
              </p>
              <a href="blog-post-vertical.html" className="btn btn-primary btn-xs">
                <span>Read more</span>
                <i className="ti-arrow-right" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
