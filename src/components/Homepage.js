import React from "react";
import HeaderComponent from "./Header";
import HeroComponent from "./HeroSection";
import LocationComponent from "./Location";
import WhyLifemealComponent from "./WhyLifemeal";
import HowitworksComponent from "./HowItWorks";
import FooterComponent from "./Footer";

class HomePageComponent extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <HeaderComponent />
        </header>
        <div className="container-fluid">
          <HeroComponent></HeroComponent>
        </div>
        <div className="container-fluid">
          <LocationComponent />
        </div>
        <div className="container-fluid" id="whylifemeal">
          <WhyLifemealComponent />
        </div>
        <div className="container-fluid" id="howitworks">
          <HowitworksComponent />
        </div>

        <div className="container-fluid footer">
          <FooterComponent />
        </div>
      </div>
    );
  }
}

export default HomePageComponent;
