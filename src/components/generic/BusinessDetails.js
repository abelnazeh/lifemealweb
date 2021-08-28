import React from "react";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import FormInputSelectOption from "./FormInputSelectOption";

const BusinessDetails = ({
  prevStep,
  nextStep,
  handleChange,
  values,
  states,
  errors,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
 
  return (
    <div>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <FormInput
            label="Business Name"
            name="businessName"
            type="text"
            value={values.businessName}
            onChange={handleChange}
            placeholder="Mako's Kimber"
            error={errors.businessName}
            required
            className="input"
          />
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6">
          <FormInput
            label="NAFDAC Reg. No."
            name="nafdacNo"
            type="text"
            value={values.nafdacNo}
            onChange={handleChange}
            placeholder="A-7890"
            error={errors.nafdacNo}
            className="input"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <FormInputSelectOption
            label="State of Residence"
            name="stateOfResidence"
            type="text"
            data={states}
            value={values.stateOfResidence}
            onChange={handleChange}
            placeholder="Enter email..."
            error={errors.stateOfResidence}
            required
            className="input"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <FormInput
            label="Physical Address"
            name="address"
            type="text"
            value={values.address}
            onChange={handleChange}
            placeholder="No. 344 Admiralty avenue lekki phase 10 Lagos"
            error={errors.address}
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

export default BusinessDetails;
