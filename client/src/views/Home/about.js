import React, {Fragment} from "react";

export default function HomeAbout({profiles, loading}) {
  return (
    <Fragment>
    {(profiles === null || loading) && (
      <idv>
        <h2>Loading...</h2>
      </idv>
    )}
    {profiles && (
    <div id="resume" className="section padding-v-60">
      {/*-- Content --*/}
      <div className="container container-wide">
        <h6 className="margin-b-50">Resume</h6>

        <div className="row padding-lg">
          <div className="col-md-4 col-sm-6 col-xs-12">
            {/*-- Resume Box / About --*/}
            <div className="resume-box">
              <span className="icon animated" data-animation="fadeInDown">
                <i className="ti-comment-alt text-tertiary" />
              </span>
              <h4>
                <strong>About</strong> Me
              </h4>
              <p className="lead">
                Sed porttitor nulla eget enim gravida blandit. Integer risus
                nunc, molestie a nibh in, interdum fringilla urna.
              </p>
              <p>
                Sed lacinia, nibh sit amet auctor vestibulum, enim risus
                condimentum erat, quis vestibulum mi ligula a nulla. Nulla vitae
                pharetra tellus. Aenean ac tincidunt augue, volutpat ullamcorper
                elit.
              </p>
            </div>

            {/*-- Resume Box / Skills --*/}
            <div className="resume-box">
              <span className="icon animated" data-animation="fadeInDown">
                <i className="ti-cup text-tertiary" />
              </span>
              <h4>
                <strong>Skills</strong> &amp; abilities
              </h4>
              {/*-- Skill --*/}
              <div className="skill">
                <div className="progress progress-animated">
                  <div
                    className="progress-bar progress-bar-primary"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span />
                  </div>
                </div>
                <strong>HTML5</strong>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            {/*-- Resume Box / Specilities --*/}
            <div className="resume-box">
              <span className="icon animated" data-animation="fadeInDown">
                <i className="ti-mouse-alt text-tertiary" />
              </span>
              <h4>
                My <strong>Specialities</strong>
              </h4>
              {/*-- Speciality --*/}
              <div className="speciality">
                <span className="speciality-icon">
                  <i className="text-muted-2x ti-desktop" />
                </span>
                <div className="speciality-content">
                  <h5 className="margin-b-0">Website production</h5>
                  <p className="speciaity-description">
                    Great, modern website.
                  </p>
                </div>
              </div>
            </div>

            {/*-- Resume Box / Education and Jobs --*/}
            <div className="resume-box">
              <span className="icon animated" data-animation="fadeInDown">
                <i className="ti-calendar text-tertiary" />
              </span>
              <h4>
                <strong>Education</strong> &amp; jobs
              </h4>
              <div className="timeline">
                {/*-- Single event --*/}
                <div className="timeline-event te-primary">
                  <span className="event-date">Sep 2018 - Apr 2020</span>
                  <span className="event-name">Web & Mobile Development</span>
                  <span className="event-description">
                    University of the West of Scotland
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            {/*-- Resume Box / Languages --*/}
            <div className="resume-box">
              <span className="icon animated" data-animation="fadeInDown">
                <i className="ti-cup text-tertiary" />
              </span>
              <h4>
                <strong>Language</strong> skills
              </h4>
              {/*-- Skill --*/}
              <div className="skill">
                <div className="progress progress-animated">
                  <div
                    className="progress-bar progress-bar-primary"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span />
                  </div>
                </div>
                <strong>Italian</strong>
                <strong>English</strong>
              </div>
            </div>

            {/*-- Resume Box / Hobbies --*/}
            <div className="resume-box">
              <span className="icon animated" data-animation="fadeInDown">
                <i className="ti-music-alt text-tertiary" />
              </span>
              <h4>
                <strong>Hobbies</strong> &amp; Interests
              </h4>
              <ul className="list-inline">
                <li>
                  <div className="icon-box text-center">
                    <span className="icon icon-sm icon-circle icon-primary icon-filled">
                      <i className="ti-music-alt" />
                    </span>
                    <span className="title">Music</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    </Fragment>
  );
}