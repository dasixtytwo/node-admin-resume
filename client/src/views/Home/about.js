import React, {Fragment} from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Row,Col } from "antd";
import { TiMessageTyping, TiNotesOutline, TiCalendarOutline, TiDirections, TiFlowChildren } from "react-icons/ti";

export default function HomeAbout({dataProfile}) {
  const { profiles, isLoading } = dataProfile;
  return (
    <Fragment>
    {/*(profiles === null || loading) && (
      <div>
        <h2>Loading...</h2>
      </div>
    )*/}
    {profiles && !isLoading && (
      profiles.map(profile => (
        <div key="aboutMe" id="resume" className="section padding-v-60">
          {/*-- Content --*/}
          <div className="container container-wide">
            <h6 className="margin-b-50">Resume</h6>

            <Row gutter={40}>
              <Col key="aboutMeCol1" md={8} sm={12} xs={24}>
                {/*-- Resume Box / About --*/}
                <div className="resume-box">
                  <ScrollAnimation animateIn="fadeInDown" className="icon">
                    <TiMessageTyping className="text-tertiary" />
                  </ScrollAnimation>
                  <h4>
                    <strong>About</strong> Me
                  </h4>
                  <ScrollAnimation animateIn="fadeInUp">
                    <p className="lead" dangerouslySetInnerHTML={{__html: profile.bio}}></p>
                  </ScrollAnimation>
                </div>

                {/*-- Resume Box / Skills --*/}
                <div className="resume-box">
                  <ScrollAnimation animateIn="fadeInDown"  className="icon">
                    <TiDirections className="text-tertiary" />
                  </ScrollAnimation>
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
              </Col>
              <Col key="aboutMeCol2" md={8} sm={12} xs={24}>
                {/*-- Resume Box / Specilities --*/}
                <div className="resume-box">
                  <ScrollAnimation animateIn="fadeInDown"  className="icon">
                    <TiDirections className="text-tertiary" />
                  </ScrollAnimation>
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
                  <ScrollAnimation animateIn="fadeInDown"  className="icon">
                    <TiCalendarOutline className="text-tertiary" />
                  </ScrollAnimation>
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
              </Col>
              <Col key="aboutMeCol3" md={8} sm={12} xs={24}>
                {/*-- Resume Box / Languages --*/}
                <div className="resume-box">
                  <ScrollAnimation animateIn="fadeInDown"  className="icon">
                    <TiFlowChildren className="text-tertiary" />
                  </ScrollAnimation>
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
                  <ScrollAnimation animateIn="fadeInDown"  className="icon">
                    <TiNotesOutline className="text-tertiary" />
                  </ScrollAnimation>
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
              </Col>
            </Row>
          </div>
        </div>
      ))
    )}
    </Fragment>
  );
}