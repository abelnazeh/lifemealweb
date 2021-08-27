import React from "react";
import FormInput from "./FormInput";
import FormInputSelectOptionGeneral from "./FormInputSelectOptionGeneral";
import FormInputTextarea from "./FormInputTextarea";


const ContactForm = ({  handleChange, values, errors, subjects }) => {
  return(
    <div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <FormInput
              label="Full Name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              placeholder="John Doe"
              error={errors.name}
              required
              className="input"
            />
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12">
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="johndoe@domain.com"
              error={errors.email}
              className="input"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <FormInputSelectOptionGeneral
              label="Subject"
              name="subject"
              type="text"
              data={subjects}
              value={values.subject}
              onChange={handleChange}
              placeholder=""
              error={errors.subject}
              required
              className="input"
            />
          </div>
       
          <div className="col-md-12 col-sm-12 col-xs-12">
            <FormInputTextarea
              label="Message here"
              name="message"
              type="text"
              value={values.message}
              onChange={handleChange}
              placeholder="Type in your message here"
              error={errors.message}
              required
              className="input"
            />
          </div>
        </div>
        </div>
    )
};


export default ContactForm;