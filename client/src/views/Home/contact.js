import React from "react";

export default function HomeContact() {
  return (
    <div id="contact" className="section padding-v-60 min-fullheight">
      {/*-- BG Map --*/}
      <div
        id="google-map"
        className="bg-image"
        data-latitude="40.758895"
        data-longitude="-73.985131"
        data-style="light"
      />

      {/*-- Contact Box --*/}
      <div
        className="contact-box bg-secondary dark animated"
        data-animation="flipInY"
      >
        <h1>
          Don’t hesitate to <strong>contact me</strong>!
        </h1>
        {/*-- Contact List --*/}
        <ul className="list-unstyled list-unstyled-icons">
          <li>
            <i className="inline-icon icon-before-and-after text-primary fa fa-map-marker" />
            15 Nowhere Lane,
            <br />
            Outta Sight,
            <br />
            State KA123AB, Scotland
          </li>
          <li>
            <i className="inline-icon icon-before-and-after text-primary fa fa-comment" />
            <a href="/">davide.a@davideagosti.info</a>
          </li>
          <li>
            <i className="inline-icon icon-before-and-after text-primary fa fa-phone" />
            +0(44)6 89764536
          </li>
        </ul>
        <a href="/" className="btn btn-primary" data-target="messenger">
          <span>Use Contact Form</span>
          <i className="ti-email" />
        </a>
        <h5 className="margin-t-60">Check my social media!</h5>
        <ul className="list-inline">
          <li>
            <a href="/" className="icon icon-circle icon-xs icon-facebook">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="/" className="icon icon-circle icon-xs icon-twitter">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="/" className="icon icon-circle icon-xs icon-google-plus">
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
      </div>
    </div>
  );
}

