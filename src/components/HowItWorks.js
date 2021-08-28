import React from "react";
import { ReactComponent as RateCookBg } from "../assets/rate_cook_bg.svg";
import * as Scroll from 'react-scroll';

const scroll    = Scroll.animateScroll;
class HowitworksComponent extends React.Component {

  // scroll to the position
  ScrollDownToPosition=(position)=>{
  scroll.scrollTo(position);
}

constructor(props){
  super(props);
  this.ScrollDownToPosition = this.ScrollDownToPosition.bind(this);
}
  render() {
  
    return (
      <div className="row howitworks-section">
        <div className="container-fluid">
          <div className="row account-bg-section">
            <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
              <h1 className="howitworks-heading">
                How it works: 4 Simple Steps
              </h1>
            </div>
          </div>
        </div>
        {/* create account how it works */}
        <div className="row create-account">
          <div className="col-md-6 col-xs-12 create-account-desc col-lg-6">
            <div className="feature-description">
              <h3 className="text-title-howitworks bg-1">
                Create an account for free
              </h3>
              <p className="howitworks-text-desc">
                Sign up on our website or app for free to begin your journey
                with us and enjoy our services.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6 create-account-image">
            <div className="mobile-image-create-account" id="createAccount" onMouseOver={() => this.ScrollDownToPosition(2900)}></div>
          </div>
        </div>

        {/* schedule a meal */}
        <div className="row schedule-a-meal">
          {/* <ScheduleMeal height={900} /> */}

          <div className="div-wrapper container">
            <div className="row">
              <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                <div className="mobile-image-schedule-meal" onMouseOver={() =>this.ScrollDownToPosition(3900)}></div>
              </div>
              <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                <div className="feature-description">
                  <h3 className="text-title-howitworks bg-2">
                    Place order or schedule a meal
                  </h3>
                  <p className="howitworks-text-desc">
                    View our wide variety a la carte menu, select your desired
                    meal and place an order or you can schedule/plan for a
                    future meal.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xs-12 col-sm-12 lettuce-left-bg"></div>
        </div>
        {/* select ur desired cook */}
        <div className="row select-cook">
          <div className="container">
            <div className="row select-cook-wp">
              <div className="col-md-6 col-xs-12  col-sm-12 col-lg-6">
                <div className="feature-description">
                  <h3 className="text-title-howitworks bg-3">
                    Select Desired Cook
                  </h3>
                  <p className="howitworks-text-desc">
                    View our cooks’ catalogue which consists the profiles of
                    amazing and experienced cooks who are always on standby and
                    make your choice.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6 select-cook-img">
                <div className="mobile-image-select-cook" onMouseOver={() =>this.ScrollDownToPosition(4900)}></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="clear"></div> */}

        {/* rate cook */}

        <div className="row rate-cook">
          <RateCookBg />
          <div className="ratecook-wrapper container">
            <div className="row">
              <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                <div className="mobile-image-rate-cook"></div>
              </div>
              <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                <div className="feature-description">
                  <h3 className="text-title-howitworks bg-4">Rate Cook</h3>
                  <p className="howitworks-text-desc">
                    After every meal, you can give a feedback by rating the cook
                    and this feedback helps us give you a better experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* download app section */}

        <div className="row download-apps-container">
          <div className="container download-main-container">
            <div className="col-md-12 col-xs-12 col-sm-12 download-container">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 download-description-container">
                  <div className="row">
                    <div className="col-md-12">
                      <p className="line-marker-download"></p>

                      <h2 className="download-section-text">
                       
                        Download app and start placing your orders
                      </h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p className="downloading-text-brief">
                        Food ordering is made easier by using the free LifeMeal
                        App at your fingertips. Head on to either of the stores
                        and download the app.
                      </p>
                    </div>
                  </div>

                  <div className="row 
                  ">
                    <div className="col-md-6 col-sm-6 col-xs-6 playstore-icon"></div>
                    <div className="col-md-6 col-sm-6 col-xs-6 appstore-icon"></div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 left-section">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 mobile-img-container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowitworksComponent;
