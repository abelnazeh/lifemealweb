import React from "react";
import FormButton from "./FormButton";
import FormInputSelectOptionGeneral from "./FormInputSelectOptionGeneral";
import FormInputTextarea from "./FormInputTextarea";
import CheckBox from "./CheckBox";


const SecurityDetails = ({ nextStep, handleChange, showTC, values,securityQuestions, errors }) => {
  const Continue = (e) => {
    e.preventDefault();
     nextStep();
  };

  return(
    <div>
           <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <FormInputSelectOptionGeneral
              label="Security Question"
              name="securityQuestion"
              type="text"
              data ={securityQuestions}
              value={values.securityQuestion}
              onChange={handleChange}
              placeholder="Enter first name..."
              error={errors.securityQuestion}
              required
              className="input"
            />
          </div>
          </div>
          <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <FormInputTextarea
              label="Your answer"
              name="answer"
              type="text"
              value={values.answer}
              onChange={handleChange}
              placeholder="Enter last name..."
              error={errors.answer}
              className="input"
              required
            />
            </div>
          </div>
         
          <div className="terms-and-contion-row">

          <CheckBox label='I accept the  <span class="highligt-text-terms">Terms and Conditions</span>'
              name="terms"
              type="checkbox"
              value={values.terms}
              onChange={handleChange}
              showModalTC={showTC}
              error={errors.terms}
              className="checkbox"
              required/>
          </div>
          <div className="container button-container-signup">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="signup-button-container">
                <FormButton
                  label="Next"
                  className="form-button"
                  type="submit"
                  handleClick={Continue}
                />
              </div>
            </div>
          </div>
        </div>
        </div>
    )
};


export default SecurityDetails;