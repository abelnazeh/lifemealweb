import React from "react";
import FormButton from "./FormButton";
import FormInput from "./FormInput";

const PersonalDetails = ({ nextStep, handleChange, values, errors }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <FormInput
            label="First Name"
            name="firstname"
            type="text"
            value={values.firstname}
            onChange={handleChange}
            placeholder="Enter first name..."
            error={errors.firstname}
            required
            className="input"
          />
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6">
          <FormInput
            label="Last Name"
            name="lastname"
            type="text"
            value={values.lastname}
            onChange={handleChange}
            placeholder="Enter last name..."
            error={errors.lastname}
            className="input"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter email..."
            error={errors.email}
            required
            className="input"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <FormInput
            label="Phone Number"
            name="mobile"
            type="text"
            value={values.mobile}
            onChange={handleChange}
            placeholder="081465683737"
            error={errors.mobile}
            required
            className="input"
          />
        </div>
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
  );
};

export default PersonalDetails;
