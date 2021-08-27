import React from "react";
import LifeMealfooterbg from "../assets/footer_bg.svg";

import styled from "styled-components";
import { ReactComponent as MobileIcon } from "../assets/Phone.svg";
import { ReactComponent as WhatsAppIcon } from "../assets/whatsapp.svg";
import { ReactComponent as EmailIcon } from "../assets/mail.svg";
import { ReactComponent as TimeIcon } from "../assets/time.svg";
import { FacebookIcon, InstagramIcon, TwitterIconNormal } from "./generic/imagesSVG";

const FooterBg = styled.div`
  /* Adapt the colors based on primary prop */
  background-image url(${LifeMealfooterbg});
  background-position:center;
  background-size:cover;
  padding-top: 60px;
  background-repeat:no-repeat;
`;


class FooterComponent extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    this.setState({ current: e.key });
  };

  render() {
    return (
      <div className="row foot-main">
        <div className="container-fluid">
          <div className="col-md-3 col-xs-4 col-sm-4 col-lg-3 footer-lettuce"></div>
        </div>
        <FooterBg className="footer-bg">
          <div className="row">
            <div className="container footer-navbar-container">
              <div className="row navbar-container">
                <div className=" col-xs-12 col-sm-4">
                  <h5 className="footer-section-title">Sitemap</h5>
                  <ul className="list-unstyled">
                    <li className="footer-link">Why Lifemeal?</li>
                    <li className="footer-link">How it Works</li>
                    <li className="footer-link">
                    <a className="footer-link" href="/faq"> Want to be a <br /> partner Cook?
                    </a>
                    
                    </li>
                    <li className="footer-link"><a className="footer-link" href="/faq">FAQs</a></li>
                  </ul>
                </div>

                <div className="col-xs-12 col-sm-4">
                  <h5 className="footer-section-title">
                    Legal</h5>
                  <ul className="list-unstyled">
                    <li className="footer-link"><a className="footer-link" href="/faq">Privacy Policy</a></li>
                    <li className="footer-link">
                    <a className="footer-link" href="/terms-and-condition">Terms and <br /> Conditions</a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <h5 className="footer-section-title">Contact</h5>
                  <div className="row">
                    {/* <div className="icon-section-contact-navbar">

                    </div> */}
                    <div className="text-section-contact-navbar">
                      <MobileIcon />
                      <span className="text-label">+234 81 2345 2356</span>
                    </div>

                    <div className="text-section-contact-navbar">
                      <WhatsAppIcon />
                      <span className="text-label"> +234 81 2345 2356</span>
                    </div>

                    <div className="text-section-contact-navbar">
                      <EmailIcon /> &nbsp;
                      <span className="text-label">holla@lifemeal.com</span>
                    </div>

                    <div className="text-section-contact-navbar">
                      <TimeIcon /> &nbsp;
                      <span className="text-label">08:00AM - 08:00PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* copy right section */}
            <div className="container footer-copy-right-container">
              <div className="row copyright-container">
                <div className="col-md-2 col-xs-12">
                <div className="footer-logo"></div>
                </div>

                <div className="col-md-6 col-xs-12">
                  <h5 className="copy-right">
                    &copy; {new Date().getFullYear()} Lifemeal.com.All rights
                    reserved.
                  </h5>
                </div>
                <div className="col-md-3 col-xs-12">
                  <h5 className="footer-social-icons-container">
                    <div className="social-icons">
                      <FacebookIcon />
                    </div>
                    <div className="social-icons">
                      <InstagramIcon />
                    </div>
                    <div className="social-icons">
                      <TwitterIconNormal />
                    </div>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </FooterBg>
      </div>
    );
  }
}

export default FooterComponent;
