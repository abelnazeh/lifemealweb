import React from "react";
import FooterComponent from "./Footer";
import ContactForm from "./generic/ContactForm";
import ContactFormSuccessCard from "./generic/ContactSuccessCard";
import FormButtonBusyContact from "./generic/FormButtonBusyContact";
import FormButtonContact from "./generic/FormButtonContact";
import HeaderComponent from "./Header";
import { PostRequest } from "./services/Requests";

class ContactPageComponent extends React.Component {
  state = {
    subjects: ["Query", "Invitation"],
    buttonText: "Send",
    buttonIcon: "sendIcon",
    contact: {
      message: "",
      name: "",
      subject: "",
      email: "",
    },
    errors: {},
    submitted: false,
  };

  // handle the change on the form values
  handleChange = (event) => {
    const { contact } = this.state;
    contact[event.target.name] = event.target.value;
    this.setState({ contact });
  };
  checkFormErrors = () => {
    if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
      const { contact } = this.state;

      PostRequest("/messages/contact/create",
        contact
      ).then(
        (result) => {
          this.setState({
            buttonText: "Please Wait!",
            buttonIcon: "loader"
          });
          if (result.status === 0 && result.success) {
            this.setState({ submitted: true });
            this.resetForm();
          }
          console.log(result);
        },
        (error) => {
          console.log(error);
          this.resetForm();
        }
      );
    } else {
      return;
    }
  };

  resetForm = () => {
    setTimeout(() => {
      this.setState({
        submitted: false,
        buttonText: "Send",
        buttonIcon: "sendIcon",
        contact: {
          message: "",
          name: "",
          subject: "",
          email: "",
        },
      });
    }, 10000);
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    const {
      contact: { message, subject, name, email },
    } = this.state;

    let err = {};

    if (message.length < 3) {
      err.message = "Please provide a valid message!";
    }
    if (email.length < 10) {
      err.email = "email address is not valid!";
    }
    if (name.length < 5) {
      err.name = "name is too short or empty!";
    }
    if (subject.length < 3) {
      err.subject = "Pls provide a valid subject!";
    }

    this.setState({ errors: err }, this.checkFormErrors);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-us-container">
              <HeaderComponent></HeaderComponent>
            </div>
          </div>
          <div className="col-sm-12 col-xs-12">
            <div className="contact-body">
              <div className="col-md-12">
                <div className="right-dotted-square"></div>
              </div>
              <div className="row row-container">
                <div className="col-sm-6 col-xs-12">
                  {/* <div className=""> */}
                  <h5 className="contact-title-text">Contact Us</h5>
                  <p className="contact-desc">Let’s talk about What you want</p>
                  {/* </div> */}
                </div>
                {/* show the card for successful contact us message otherwise show the contact form */}
                {this.state.submitted ? (
                  <ContactFormSuccessCard />
                ) : (
                  <div className="col-sm-6 col-xs-12">
                    <div className="form-container">
                      <div className="form-title">
                        <p>Send us a message</p>
                      </div>
                      {/* contact us form */}
                      <form>
                        <ContactForm
                          values={this.state.contact}
                          subjects={this.state.subjects}
                          errors={this.state.errors}
                          nextStep={this.handleStepOneSubmit}
                          prevStep={this.prevStep}
                          handleChange={this.handleChange}
                        />
                        <div className="container button-container-signup">
                          <div className="row">
                            <div className="col-sm-12 col-xs-12">
                              <div className="contact-button-container">
                                {this.state.buttonIcon === "sendIcon" ? (
                                  <FormButtonContact
                                    label={this.state.buttonText}
                                    className="form-button"
                                    type="submit"
                                    handleClick={this.handleFormSubmit}
                                  />
                                ) : (
                                  <FormButtonBusyContact
                                    label={this.state.buttonText}
                                    className="form-button-busy"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                <div className="left-dotted-square"></div>
              </div>
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

export default ContactPageComponent;
