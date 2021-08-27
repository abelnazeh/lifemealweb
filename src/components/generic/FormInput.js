import React from "react";
import PropTypes from "prop-types";
const FormInput = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  label,
  active,
  ...props
}) => {
  return (
    <React.Fragment>
      <div className="field">
        <label htmlFor={name} className={error && "error"}>
          {error || label}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={`${active ? "active" : "checkbox"}`}
        />
      </div>
      {/* {error && <p>{error}</p>} */}
    </React.Fragment>
  );
};

FormInput.defaultProps = {
  type: "text",
  className: "",
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
//   type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password","email"]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
