import React from "react";
import PropTypes from "prop-types";
import parse from 'html-react-parser';
const CheckBox = ({
  name,
  type,
  onChange,
  value,
  error,
  showModalTC,
  children,
  label,
  active,
  ...props
}) => {
  return (
    <React.Fragment>
      <div className="checkbox-container">
      <label className="checkbox-label">
            <input
            id={name}
            title={label}
            name={name}
            type={type}
            onChange={onChange}
            value={value}
            />
            <span className="checkbox-custom rectangular"></span>
        </label>
     
        <label onClick={showModalTC} htmlFor={name} className="accept-terms-text">
          {error ? parse(`<span class="error">${error}</span>`) : parse(label)}
        </label>
      </div>
    </React.Fragment>
  );
};

CheckBox.defaultProps = {
  type: "checkbox",
  className: "",
};

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["checkbox"]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
