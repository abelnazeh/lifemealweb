import React from "react";
import { fadeIn, slideInLeft } from "react-animations";
import styled, { keyframes } from "styled-components";
import FormInput from "./generic/FormInput";
import FormButton from "./generic/FormButton";
import { HorizontalLine } from "./generic/imagesSVG";
import LogoComponent from "./generic/Logo";
import UsernameModal from "./generic/FormModal";
import SecurityQuestionsModal from "./generic/SecurityQuestionsModal";
import WrongSecurityDetailsModal from "./generic/WrongSecurityDetailsModal";
import SuccessfullPasswordResetModal from "./generic/SuccessfulPasswordResetModal";
import { GetRequest, PostRequest } from "./services/Requests";
import GoogleSignIn from "./signin/GoogleSignIn";
import FacebookSignIn from "./signin/FacebookSigin";
import GoogleSignOut from "./signin/GoogleSignOut";
import { createStorageItem, removeStorageItem, getStorageItem } from "./services/util";

const fadeLeftAnimation = keyframes`${fadeIn}`;

const fadeRightAnimation = keyframes`${slideInLeft}`;

const SlideLeftDiv = styled.div`
  animation: 1s ${fadeLeftAnimation};
`;

const SlideRightDiv = styled.div`
  z-index: -9999999;
  animation: 1.2s ${fadeRightAnimation};
`;

class loginComponent extends React.Component {
  state = {
    user: {
      username: "",
      password: "",
    },
    errors: {},
    show: false,
    reset: {
      email: "",
      answer: "",
      question: "",
    },
    submitted: false,
    isAnswerValid: false,
    isTwitter: false,
    isGoogle: false,
    isFacebook: false,
    question: "",
    userDetails: {},
    step: 1,
  };
  componentDidMount() {
    let getUser = getStorageItem("userDetails");

    if (getUser) {
      this.setState({ userDetails: getUser, submitted: true });
    }
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false, error: false, step: 1, submitted: false });
  };

  handleChange = (event) => {
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  handleChangeReset = (event) => {
    const { reset } = this.state;
    reset[event.target.name] = event.target.value;
    this.setState({ reset });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      user: { username, password },
    } = this.state;
    let err = {};
    if (!username) {
      err.username = "Enter your username!";
    }

    if (password.length < 8) {
      err.password = "Password must be at least 8 characters!";
    }

    this.setState({ errors: err }, () => {
      if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
        const { user } = this.state;
        user.username = user.username.toLowerCase();

        PostRequest("/user/query/login", this.state.user, false).then(
          (result) => {
            if (result.status === 0 && result.success) {
              createStorageItem("Token", result.token);
              const { userInfo } = result;
              this.setState({ submitted: true, userDetails: userInfo });
            }
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
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
      PostRequest('/facebook/user/oauth/create_token', user);
      // store the data on local storage
      createStorageItem(
        process.env.REACT_APP_LOCAL_STORAGE_USER,
        this.state.userDetails
      );
    } else {
      alert("Ooops not able to login with facebook");
    }
  };
  handleEmailValidation = (e) => {
    const {
      reset: { email },
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

    this.setState({ errors: err }, this.checkFormErrors);
  };

  handleAnswerValidation = () => {
    const {
      reset: { answer },
    } = this.state;

    let err = {};

    if (answer.length < 3) {
      err.email = "pls provide a valid answer";
    }

    this.setState({ errors: err }, this.checkFormErrors);
  };

  logoutCallback = (response) => {
    if (response && response.isLoggout) {
      removeStorageItem("userDetails");
      removeStorageItem("Token");
      this.setState({
        submitted: false,
        isGoogle: false,
        isFacebook: false,
        isTwitter: false,
        userDetails: {},
      });
      // window.location='/'
    }
    console.log("response callback");
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    let err = {};
    if (step === 1) {
      console.log("first step get the questions");
      GetRequest(
        `/user/securityQuestion/query?email=${this.state.reset.email}`,
        false
      ).then(
        (result) => {
          if (result.status === 0 && result.success) {
            this.setState({
              userDetails: result.message,
              step: step + 1,
              question: result.message.securityQuestion,
            });
          } else {
            err.email = "Oops!, having trouble finding your email details";
            this.setState({ errors: err }, this.checkFormErrors);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      if (
        this.state.userDetails.answer.toLowerCase() ===
          this.state.reset.answer.toLowerCase() &&
        step <= 2
      ) {
        this.setState({ step: step + 3 });
      } else {
        this.setState({ step: step + 1 });
      }
    }
  };

  checkFormErrors = () => {
    if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
      this.nextStep();
    } else {
      return;
    }
  };

  handleResetValidations = () => {
    const {
      reset: { email, answer },
    } = this.state;
    let err = {};
    if (!email) {
      err.email = "Pls provide valid email address";
    }

    if (!answer) {
      err.answer = "Pls provide a valid answer";
    }
  };

  renderComponent = (step) => {
    switch (step) {
      case 1:
        return (
          <UsernameModal
            handleClose={this.handleEmailValidation}
            onChange={this.handleChangeReset.bind(this)}
            show={this.state.show}
            email={this.state.reset.email}
            errors={this.state.errors}
          />
        );
      case 2:
        return (
          <SecurityQuestionsModal
            handleClose={this.handleAnswerValidation}
            onChange={this.handleChangeReset.bind(this)}
            show={this.state.show}
            question={this.state.question}
            answer={this.state.reset.answer}
            errors={this.state.errors}
          />
        );
      case 3:
        return (
          <WrongSecurityDetailsModal
            handleClose={this.hideModal}
            show={this.state.show}
          />
        );
      case 5:
        return (
          <SuccessfullPasswordResetModal
            handleClose={this.hideModal}
            show={this.state.show}
            email={this.state.reset.email}
          />
        );
      default:
        break;
    }
  };

  render() {
    const { step } = this.state;
    const {
      submitted,
      isGoogle,
      isFacebook,
      errors,
      user: { username, password },
    } = this.state;

    return (
      <div>
        {this.renderComponent(step)}

        {/* sign up modal */}

        <div className="container-fluid">
          <div className="row">
            {/* left section of the page */}
            <div className="col-md-6 col-lg-6 col-xs-12 left-login-section">
              <SlideLeftDiv>
                <div className="left-login-container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="welcomeback-text">
                        <h2 className="welcome-text">Welcome back</h2>
                        <p className="welcome-desc">
                          The burner’s cold, hungry stomachs are waiting for
                          you.
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
                        {/* <GoogleSignOut callback={this.googleLogoutCallback}/> */}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="horizontal-line">
                        <HorizontalLine />
                      </div>
                    </div>
                  </div>
                  {/* form input for the login */}
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="login-form-container">
                        <form>
                          <React.Fragment>
                            {submitted || isGoogle || isFacebook ? (
                              <p>
                                Welcome onboard,{" "}
                                {username || this.state?.userDetails?.email}!
                                <GoogleSignOut callback={this.logoutCallback} />
                              </p>
                            ) : (
                              <React.Fragment>
                                <FormInput
                                  label="Username"
                                  name="username"
                                  type="email"
                                  value={username}
                                  onChange={this.handleChange.bind(this)}
                                  placeholder="Enter username..."
                                  error={errors.username}
                                  required
                                  className="input"
                                />
                                <FormInput
                                  label="Password"
                                  name="password"
                                  type="password"
                                  value={password}
                                  onChange={this.handleChange.bind(this)}
                                  placeholder="Enter password..."
                                  error={errors.password}
                                  className="input"
                                  required
                                />
                                <div className="container button-container-forgetpass">
                                  <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-6">
                                      <div className="login-forget-pass-container">
                                        <div className="lost-pass">
                                          <div
                                            className="lost-pass-text"
                                            onClick={this.showModal.bind(this)}
                                          >
                                            Lost PIN?
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6">
                                      <div className="login-button-container">
                                        {/* <Button primary>Login</Button> */}
                                        <FormButton
                                          label="Login"
                                          className="form-button"
                                          type="submit"
                                          handleClick={this.handleSubmit.bind(
                                            this
                                          )}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </React.Fragment>
                            )}
                          </React.Fragment>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="container create-account-container">
                    <div className="row">
                      <div className="col-md-12 col-xs-12 col-sm-12">
                        <span className="new-here-text">Are you new here?</span>{" "}
                        <a className="create-account-text" href="/sign-up">
                          Create Account
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideLeftDiv>
            </div>
            {/* right section of the page */}
            <div className="col-md-6 col-lg-6  col-xs-12 right-section">
              <SlideRightDiv>
                <div className="right-login-container">
                  <div className="container login-logo-container">
                    <div className="col-md-12 col-xs-12 col-sm-12">
                      <div className="login-logo">
                        <LogoComponent />
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

export default loginComponent;
