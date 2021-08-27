import React from "react";
import { fadeIn, slideInRight } from "react-animations";
import styled, { keyframes } from "styled-components";
import PersonalDetails from "./generic/PersonalDetails";
import BusinessDetails from "./generic/BusinessDetails";
import SecurityDetails from "./generic/SecurityDetail";
import { statesList } from "./generic/stateList";
import { GmailIcon, TwitterIcon, HorizontalLine } from "./generic/imagesSVG";
import LogoComponent from "./generic/Logo";
import ModalCard from "./Modals/ModalCard";
import { PostRequest } from "./services/Requests";
import WrongSecurityDetailsModal from "./Modals/WrongSecurityDetailsModal";
import FacebookSignIn from "./signin/FacebookSigin";
import GoogleSignIn from "./signin/GoogleSignIn";
import { createStorageItem } from "./services/util";
import TermsAndConditionsModal from "./Modals/TermsAndConditionsModal";


const fadeLeftAnimation = keyframes`${slideInRight}`;

const fadeRightAnimation = keyframes`${fadeIn}`;

const SlideLeftDiv = styled.div`
  z-index: -9999999;
  animation: 1s ${fadeLeftAnimation};
`;

const SlideRightDiv = styled.div`
  animation: 1.2s ${fadeRightAnimation};
`;

class SignUpComponent extends React.Component {
  state = {
    step: 1,
    securityQuestion: [
      "When did you have your first crush?",
      "when was the first time you saw an aeroplane?",
      "What is the name of your favourite president",
      "others",
    ],
    states: [],
    userDetails:{},
    termsAccepted:false,
    user: {
      lastname: "",
      firstname: "",
      email: "",
      terms:false,
      mobile: "",
      businessName: "",
      address: "",
      stateOfResidence: "",
      nafdacNo: "",
      securityQuestion: "",
      answer: "",
    },
    errors: {},
    error:false,
    failedMsg:'',
    show: false,
    showTC:false,
    isFacebook:false,
    isGoogle:false,
    submitted: false,
  };

  componentDidMount() {
    this.setState({ states: statesList });
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  acceptTerms=(value)=>{
  console.log(value, ' sent ');
    const {user} = this.state; 
    user.termsAccepted = user.termsAccepted;

    this.setState({user, showTC:false});
  }

  showModal = () => {
    this.setState({ show: true });
  };

  showModalTC = () => {
    console.log('called here');
    this.setState({ showTC: true });
  };

  hideModalTC = () => {
    this.setState({ showTC: false });
  };

  hideModal = () => {
    this.setState({ show: false });
    window.location = "/";
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    if (step <= 3) {
      this.setState({ step: step + 1 });
      console.log(this.state.step);
    }
    if (step === 3) {
      PostRequest( "/user/createAccount",
        this.state.user
      ).then(
        (result) => {
          console.log(result);
          if(result.status === 0 && result.success){

            this.setState({ show: true, submitted: true });
          }else{
            this.setState({ show: true, error: true, failedMsg:result.message });
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  // handle the change on the form values
  handleChange = (event) => {
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  checkFormErrors = () => {
    if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
      this.nextStep();
    } else {
      return;
    }
  };

  handleStepThreeSubmit = (e) => {
    const {
      user: { securityQuestion, answer, terms },
    } = this.state;

    let err = {};

    if (securityQuestion.length < 3) {
      err.securityQuestion = "security question is not valid!";
    }
    if (answer.length < 5) {
      err.answer = "answer is not valid!";
    }
    if (!terms) {
      err.terms = "Pls accept terms and conditions!";
    }

    this.setState({ errors: err }, this.checkFormErrors);
  };

  handleStepTwoSubmit = (e) => {
    const {
      user: { stateOfResidence, businessName, nafdacNo, address },
    } = this.state;

    let err = {};

    if (nafdacNo.length < 3) {
      err.nafdacNo = "NAFDAC Reg. No is not valid!";
    }
    if (address.length < 10) {
      err.address = "address is not valid!";
    }
    if (businessName.length < 5) {
      err.businessName = "Business name is not valid!";
    }
    if (stateOfResidence.length < 3) {
      err.stateOfResidence = "state of resident is not valid!";
    }

    this.setState({ errors: err }, this.checkFormErrors);
  };

  handleStepOneSubmit = (e) => {
    const {
      user: { email, lastname, firstname, mobile },
    } = this.state;

    let err = {};

    if (email.length < 5) {
      err.email = "Email should be at least 5 charcters long";
    }
    if (email.split("").filter((x) => x === "@").length !== 1) {
      err.email = "Email should contain a @";
    }
    if (email.indexOf(".") === -1) {
      err.email = "Email should contain at least one dot";
    }
    if (!email) {
      err.email = "Enter a valid email!";
      this.setState({ errors: err });
    }
    if (mobile.length < 11) {
      err.mobile = "Mobile Number is not valid!";
    }
    if (lastname.length < 3) {
      err.lastname = "last name is not valid!";
    }
    if (firstname.length < 3) {
      err.firstname = "first name is not valid!";
    }

    this.setState({ errors: err }, this.checkFormErrors);
  };

  handleGoogleCallback = (userData) => {
    const { error } = userData;
    if (!error) {
      this.setState({ userDetails: userData, isGoogle: true });
      // store the data on local storage
      createStorageItem(
        process.env.REACT_APP_LOCAL_STORAGE_USER,
        this.state.userDetails
      );
    }
  };
  handleFacebookCallback = (userData) => {
    const {
      user,
      user: { error },
    } = userData;

    if (!error) {
      this.setState({ userDetails: user, isFacebook: true });
      // store the data on local storage
      createStorageItem(
        process.env.REACT_APP_LOCAL_STORAGE_USER,
        this.state.userDetails
      );
    } else {
      alert("Ooops not able to login with facebook");
    }
  };

  renderComponent = (step) => {
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            values={this.state.user}
            errors={this.state.errors}
            nextStep={this.handleStepOneSubmit}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return (
          <BusinessDetails
            values={this.state.user}
            errors={this.state.errors}
            nextStep={this.handleStepTwoSubmit}
            prevStep={this.prevStep}
            states={this.state.states}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return (
          <SecurityDetails
            values={this.state.user}
            showTC={this.showModalTC}
            errors={this.state.errors}
            nextStep={this.handleStepThreeSubmit}
            prevStep={this.prevStep}
            securityQuestions={this.state.securityQuestion}
            handleChange={this.handleChange}
          />
        );
      default:
        break;
    }
  };

  render() {
    const { step, submitted, error,failedMsg } = this.state;
    return (
      <div>
        {submitted && (
          <ModalCard
            show={this.state.show}
            handleClose={this.hideModal}
            ModalContent={`Your login credentials has been sent to your email
          (${this.state.user.email}), please do check and login to your
          account, we can’t wait to get started.`}
            Modaltittle="Welcome Aboard!"
          ></ModalCard>
        )}  
        {
          error && <WrongSecurityDetailsModal
          handleClose={this.hideModal}
          failedMsg={failedMsg}
          show={this.state.show}
        />
        }
        <TermsAndConditionsModal acceptTerms={this.acceptTerms} openTCModal={this.showModalTC}  handleClose={this.hideModalTC} show={this.state.showTC} />
        <div className="container-fluid">
          <div className="row">
            {/* left section of the page */}
            <div className="col-md-6 col-lg-6 col-xs-12 right-signup-section">
              <SlideLeftDiv>
                <div className="left-signup-container">
                  <div className="container signup-logo-container">
                    <div className="col-md-12 col-xs-12 col-sm-12">
                      <div className="signup-logo">
                        <LogoComponent />
                      </div>
                    </div>
                  </div>
                </div>
              </SlideLeftDiv>
            </div>
            {/* right section of the page */}
            <div className="col-md-6 col-lg-6 col-xs-12 right-signup-section">
              <SlideRightDiv>
                <div className="right-signup-container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="singupdesc-text">
                        <h2 className="welcome-text">
                          Do you want to collaborate with us to provide healthy,
                          tasty and home-made meals?
                        </h2>
                        <p className="welcome-desc">
                          Fill in your details below and let’s get started!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      {/* google icon */}
                      <div className="social-media-container">
                      <GoogleSignIn callback={this.handleGoogleCallback} />
                        <FacebookSignIn 
                          callback={this.handleFacebookCallback}
                        />
                        {/* <div className="social-icon-login">
                          <GmailIcon title="google icon" />
                        </div> */}
                        {/* twitter icon */}
                        {/* <div className="social-icon-login">
                          <TwitterIcon title="twitter icon" />
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="horizontal-line">
                        <HorizontalLine title="horizontal line" />
                      </div>
                    </div>
                  </div>
                  <div className="row signup-progress-container">
                    <div className="col-md-4 col-sm-4 col-xs-4">
                      <div
                        className={`progress-bar-inactive progress-bar-active ${
                          this.state.step > 1 ? "progress-bar-completed" : ""
                        }`}
                      ></div>
                      <p className="icon-progress">
                        <span
                          className={`checkbox__control checkbox__control-active ${
                            this.state.step > 1
                              ? "checkbox__control-completed"
                              : ""
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              fill="none"
                              stroke="#fff"
                              strokeWidth="3"
                              d="M1.73 12.91l6.37 6.37L22.79 4.59"
                            />
                          </svg>
                        </span>
                      </p>
                      <p className="progress-text">Personal Details</p>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-4">
                      <div
                        className={`progress-bar-inactive ${
                          this.state.step === 2 ? "progress-bar-active" : ""
                        } ${
                          this.state.step > 2 ? "progress-bar-completed" : ""
                        }`}
                      ></div>
                      <p className="icon-progress">
                        <span
                          className={`checkbox__control ${
                            this.state.step === 2
                              ? "checkbox__control-active"
                              : "checkbox__control-inactive"
                          } ${
                            this.state.step > 2
                              ? "checkbox__control-completed"
                              : ""
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              fill="none"
                              stroke="#fff"
                              strokeWidth="3"
                              d="M1.73 12.91l6.37 6.37L22.79 4.59"
                            />
                          </svg>
                        </span>
                      </p>
                      <p className="progress-text">Business Details</p>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-4">
                      <div
                        className={`progress-bar-inactive ${
                          this.state.step === 3 ? "progress-bar-active" : ""
                        } ${
                          this.state.step > 3 ? "progress-bar-completed" : ""
                        }`}
                      ></div>
                      <p className="icon-progress">
                        <span
                          className={`checkbox__control ${
                            this.state.step === 3
                              ? "checkbox__control-active"
                              : "checkbox__control-inactive"
                          } ${
                            this.state.step > 3
                              ? "checkbox__control-completed"
                              : ""
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              fill="none"
                              stroke="#fff"
                              strokeWidth="3"
                              d="M1.73 12.91l6.37 6.37L22.79 4.59"
                            />
                          </svg>
                        </span>
                      </p>
                      <p className="progress-text">Security Questions</p>
                    </div>
                  </div>
                  {/* form input for the login */}
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="signup-form-container">
                        <form>{this.renderComponent(step)}</form>
                      </div>
                    </div>
                  </div>
                  <div className="container create-account-container">
                    <div className="row">
                      <div className="col-md-12 col-xs-12 col-sm-12">
                        <span className="new-here-text">
                          Filled this form before?
                        </span>
                        <a className="create-account-text" href="/login">
                          Login
                        </a>
                        {/* <button onClick={this.showModalTC}>terms and conditions</button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </SlideRightDiv>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpComponent;
