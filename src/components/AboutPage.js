import React from "react";
import FooterComponent from "./Footer";
import { BioArrow, CloseIcon } from "./generic/imagesSVG";
import HeaderComponent from "./Header";
class AboutPageComponent extends React.Component {
  closeTeamContent = (showid, hideAvatarId, parentMarginClass) => {
    
      // the card to show when clicked
      const showElem = document.getElementById(showid);
      const teamMembers = document.querySelectorAll(".team-member");
  
      //  team id of the card to hidden when clicked
      const hideElem = document.getElementById(hideAvatarId);
      const parentDiv = document.getElementById("container-team");
  
      let allContent = document.querySelectorAll(".team-member-content");
      const activeTeam = document.querySelector(`.${parentMarginClass}`);
      if (activeTeam) {
        // remove the class of the content when close button is clicked
        parentDiv.classList.remove(parentMarginClass)
      
      }
      for (let content of allContent) {
        if (content.getAttribute("data-team") === hideAvatarId) {
          // set the default class back because of the css classes added that will cause inconsistence if multiple team grid clicked
          parentDiv.setAttribute("class", "team-container");
          parentDiv.classList.add(parentMarginClass);
          content.style.display = "block";
          for (let member of teamMembers) {
            // show all the member/team grid
            member.style.display = "block";
          }
          hideElem.style.display = "none";
        } else {
          // hide the team content
          content.style.display = "none";
          // display the team grid
          showElem.style.display = "block";
        }
      }
  };
  render() {
    return (
      <div>
        {/* <div className="row"> */}
          <div className="col-md-12 col-lg-12">
            <div className="faq-container">
              <HeaderComponent/>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 faq-main-container">
            <div className="about-body">
              <div className="about-header-title">Our Story</div>
              <div className="about-desc-container">
                <p>
                  We are an online food ordering and delivery platform that
                  bridges the gap between you and the healthy, nutritional,
                  fresh and safe meal you desire. Our meals are made just for
                  you according to your unique nutritional, dietary and cultural
                  needs. In 2017, Mrs Anthonia Peddy Ofili (mother to Ugo and
                  Jude Ofili) died of glioblastoma, an aggressive type of brain
                  cancer. During the period of the illness and her care, she had
                  to follow a strict meal and diet plan which had to be made to
                  suit her unique needs and was sometimes difficult to make.
                  LifeMeal was birthed from this experience.
                </p>
              </div>
            </div>
            {/* section one */}
            <section className="section-one-about">
              <div className="row">
                <div className="upper-row-container col-md-6 col-sm-6 col-xs-6">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <div className="dotted-bg-left"></div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <div className="pink-arrow-bg"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* left section of the chef */}
                <div className="col-md-6 col-sm-6 col-xs-6 left-avatar">
                  <div className="avatar-chef-one"></div>
                  <div className="clear"></div>
                  <div className="below-row-container">
                    <div className="faded-bg"></div>
                    <div className="pink-bg"></div>
                  </div>
                </div>
                {/* right section of the chef */}
                <div className="col-md-6 col-sm-6 col-xs-6 right-avatar">
                  <div className="avatar-chef-two"></div>
                  <div className="dotted-bg-right"></div>
                </div>
              </div>
            </section>
            <section className="section-two-about">
              <div className="row">
                <div className="col-md-12 float-right col-sm-12 col-xs-12">
                  <div className="text-container-about-right">
                    <p className="vission-title">Our Vision</p>
                    <div className="hr-line-right"></div>
                    <p className="vission-text">
                      To share humanity’s commonwealth one meal at a time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 float-left col-sm-12 col-xs-12">
                  <div className="text-container-about-left">
                    <p className="vission-title">Our Mission</p>
                    <div className="hr-line"></div>
                    <p className="vission-text">
                      To provide individuals access to healthy, safe, and
                      freshly cooked meals.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* team section */}
            <section className="team-section-about">
              <div className="row">
                <div className="team-header">
                  <p>Our Team</p>
                </div>
              </div>
              <div className="team-container" id="container-team">
                <div id="micheal" className="team-member">
                  <div className="team-avatar micheal-ofili"></div>
                  <div className="member-name">Michael Ofili </div>
                  <div className="designation">Co-Founder, CEO</div>
                  <div
                    className="read-bio"
                    onClick={() =>
                      this.closeTeamContent(
                        "micheal-content",
                        "micheal",
                        "micheal-margin-left"
                      )
                    }
                  >
                    <div className="row">
                      <div className="col-md-7 bio col-sm-7 col-xs-7">
                        <p>Read bio</p>
                      </div>
                      <div className="col-md-5 bio col-sm-5 col-xs-5">
                        <BioArrow />
                      </div>
                    </div>
                  </div>
                </div>
                {/* micheal ofilli content */}
                <div
                  id="micheal-content"
                  data-team="micheal"
                  className="team-member-content col-md-6"
                >
                  <div
                    className="close-icon"
                    onClick={() =>
                      this.closeTeamContent("micheal", "micheal-content", "micheal-margin-left")
                    }
                  >
                    <CloseIcon />
                  </div>
                  <div className="active-team">
                    <div className="team-avatar micheal-ofili"></div>
                  </div>
                  <div className="team-description-role">
                    <span className="name">Ugochukwu Michael Ofili</span> is the
                    Co-founder and head of business development and also the
                    principal visioner and driver of LifeMeal Technologies
                    Limited. His specialities are in Sales, finance and Business
                    Development as well as Business Management. A Graduate of
                    Economics from the University of Ilorin and a Masters Degree
                    holder in Economics from the University of Ibadan. He is
                    currently pursuing a 2nd Master’s in Development Finance
                    from the University of Lagos, Nigeria. He has over 17 years
                    experience in commercial banking and business development.
                  </div>
                </div>

                <div id="jude" className="team-member">
                  <div className="team-avatar jude-ofili"></div>
                  <div className="member-name">Jude Ofili </div>
                  <div className="designation">Co-Founder, CTO</div>
                  <div
                    className="read-bio"
                    onClick={() =>
                      this.closeTeamContent("jude-content", "jude", "jude-margin-left")
                    }
                  >
                    <div className="row">
                      <div className="col-md-7 bio col-sm-7 col-xs-7">
                        <p>Read bio</p>
                      </div>
                      <div className="col-md-5 bio col-sm-5 col-xs-5">
                        <BioArrow />
                      </div>
                    </div>
                  </div>
                </div>
                {/* jude ofilli content */}
                <div
                  id="jude-content"
                  data-team="jude"
                  className="team-member-content col-md-6"
                >
                  <div
                    className="close-icon"
                    onClick={() =>
                      this.closeTeamContent("jude", "jude-content", "jude-margin-left")
                    }
                  >
                    {<CloseIcon />}
                  </div>
                  <div className="active-team">
                    <div className="team-avatar jude-ofili"></div>
                  </div>
                  <div className="team-description-role">
                    <span className="name">Chukwudi Jude Ofili</span> is a
                    Co-founder and CTO of LifeMeal Technologies Limited. He
                    brings Technical Leadership, Product Management and
                    Operations management skills. A Graduate of Electrical
                    Engineering from the University of Ilorin and a master’s
                    degree holder in Web Sciences and Big Data from the
                    University of Liverpool, UK. He is certified in Project
                    Management by the Project Management Institute (PMI). He has
                    over 13 years experience in Information Technology and
                    telecommunications
                  </div>
                </div>

                <div id="nazeh" className="team-member">
                  <div className="team-avatar nazeh-abel"></div>
                  <div className="member-name">Nazeh Abel </div>
                  <div className="designation">Developer</div>
                  <div
                    className="read-bio"
                    onClick={() =>
                      this.closeTeamContent(
                        "nazeh-content",
                        "nazeh",
                        "nazeh-margin-left"
                      )
                    }
                  >
                    <div className="row">
                      <div className="col-md-7 bio col-sm-7 col-xs-7">
                        <p>Read bio</p>
                      </div>
                      <div className="col-md-5 bio col-sm-5 col-xs-5">
                        <BioArrow />
                      </div>
                    </div>
                  </div>
                </div>
                {/* jude ofilli content */}
                <div
                  id="nazeh-content"
                  data-team="nazeh"
                  className="team-member-content col-md-6"
                >
                  <div
                    className="close-icon"
                    onClick={() =>
                      this.closeTeamContent("nazeh", "nazeh-content", 'nazeh-margin-left')
                    }
                  >
                    {<CloseIcon />}
                  </div>
                  <div className="active-team">
                    <div className="team-avatar nazeh-abel"></div>
                  </div>
                  <div className="team-description-role">
                    <span className="name">Nazeh Abel</span> is the Lead
                    Solutions Architect and brings Solution design and
                    architecture skills, Web and business logic development and
                    Software Engineering Leadership to the team. He has over 5
                    years experience in software development and has
                    successfully launched mobile and web applications. He is an
                    Artificial Intelligence (AI), Data Science and Machine
                    Learning enthusiast. A graduate of Information Technology
                    from NIMS University, Jaipur, India, he is currently
                    pursuing a Masters degree in Artificial Intelligence from
                    the University of Wolverhampton, UK.
                  </div>
                </div>
                <div id="francis" className="team-member">
                  <div className="team-avatar francis-aronu"></div>
                  <div className="member-name">Francis Aronu </div>
                  <div className="designation">Health Consultant</div>
                  <div
                    className="read-bio"
                    onClick={() =>
                      this.closeTeamContent(
                        "francis-content",
                        "francis",
                        "francis-margin-left"
                      )
                    }
                  >
                    <div className="row">
                      <div className="col-md-7 bio bio col-sm-7 col-xs-7">
                        Read bio
                      </div>
                      <div className="col-md-5 bio col-sm-5 col-xs-5">
                        <BioArrow />
                      </div>
                    </div>
                  </div>
                </div>
                {/* fracis content */}
                <div
                  id="francis-content"
                  data-team="francis"
                  className="team-member-content col-md-6"
                >
                  <div
                    className="close-icon"
                    onClick={() =>
                      this.closeTeamContent("francis", "francis-content", 'francis-margin-left')
                    }
                  >
                    {<CloseIcon />}
                  </div>
                  <div className="active-team">
                    <div className="team-avatar francis-aronu"></div>
                  </div>
                  <div className="team-description-role">
                    <span className="name">Francis aronu</span> Francis aronu is
                    a trained Pharmacist with 17years of experience. He is an
                    experienced sales and marketing professional, and mental
                    health advocate. Francis has demonstrated a history of
                    working in the health and telecommunications industries and
                    is a skilled negotiator, marketer and health consultant. A
                    Graduate of the University of Nigeria, Nsukka and
                    Thunderbird School of Global Management, he brings in strong
                    business planning skills, consultancy and engagement with
                    government parastatals and bodies.
                  </div>
                </div>
              </div>
            </section>
          {/* </div> */}
        </div>
        {/* footer section */}
        <div className="">
          <FooterComponent />
        </div>
      </div>
    );
  }
}

export default AboutPageComponent;
