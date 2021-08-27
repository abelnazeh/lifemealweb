import React from "react";

import styled from "styled-components";
import { LifeMealDisheshbg } from "./generic/imagesSVG";

const DishBg = styled.div`
  /* Adapt the colors based on primary prop */
  background-image url(${LifeMealDisheshbg});
  background-position:center;
  background-size:contain;
  height:560px;
  background-repeat:no-repeat;
`;

class WhyLifemealComponent extends React.Component {
  state = {
    size: "large",
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    return (
      <div className="row whylifemeal-section">
        <div className="container">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="line-marker"></div>
            <h2 className="whylifemeal-text"> Why Lifemeal?</h2>
          </div>
        </div>
        <div className="container">
          <DishBg className="dish-bg-display">
            <div className="row whylifemeal-container">
              <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                <div className="versatile-container">
                 
                  <h4 className="why-title">Versatile Menu</h4>
                  <p>
                    Our a la carte menu contains a variety of freshly prepared
                    meals which include vegetarian, low-carb, keto, special
                    native/traditional dishes and lots more.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                <div className="here-container">
                 
                </div>
              </div>
            </div>
            <div className="lettuce-container">
              <div className="row whylifemeal-container">
                <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                  <div className="uniques-container"></div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                  <div className="unique-container">
                    <h4 className="why-title">Uniqueness to all</h4>
                    <p>
                      We consider your unique individuality such as your medical
                      and athletic needs, daily calorie intake, religion,
                      tradition etc.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row whylifemeal-container">
                <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                  <div className="purelymade-container">
                    <h4 className="why-title">Purely Homemade</h4>
                    <p>
                      Meals are prepared to have that unbeatable home-made taste
                      and feel.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6"></div>
              </div>

              <div className="row whylifemeal-container">
                <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6"></div>
                <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                  <div className="servicethatfit-container">
                    <h4 className="why-title">Services that fit</h4>
                    <p>Our services are fast and pocket friendly.</p>
                  </div>
                </div>
              </div>
            </div>
          </DishBg>
        </div>
      </div>
    );
  }
}

export default WhyLifemealComponent;
