import React from "react";
import FooterComponent from "./Footer";
import TermsAndCondtionsComponent from "./generic/TermsAndConditionComponent";
import HeaderComponent from "./Header";

class TermsAndConditionsComponent extends React.Component {
  render() {
    return (
      <div>
          <header className="App-header">
          <HeaderComponent />
        </header>
          <div>
          <div className="col-md-12 col-sm-12 tc-main-container">
            <div className="tc-body">
              <div className="tc-header-title">Terms and Conditions</div>
              <div className="col-md-12">
                <div className="right-dotted-square-faq"></div>
              </div>
             <TermsAndCondtionsComponent/>
              <div className="left-dotted-square-faq"></div>
            </div>
          </div>
        </div>
        <div className="">
          <FooterComponent />
        </div>
      </div>
    );
  }
}

export default TermsAndConditionsComponent;
