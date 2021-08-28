import React from "react";
import PropTypes from "prop-types";
const FormInputTextarea = ({
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
      <div className="field textarea">
        <label htmlFor={name} className={error && "error"}>
          {error || label}
        </label>
        <textarea
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={`${active ? "active" : ""}`}
        ></textarea>
      </div>
      {/* {error && <p>{error}</p>} */}
    </React.Fragment>
  );
};

FormInputTextarea.defaultProps = {
  className: "",
};

FormInputTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default FormInputTextarea;
