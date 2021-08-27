import React from "react";
import PropTypes from "prop-types";
const FormInputSelectOptionGeneral = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  data,
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
        <select 
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={`classic ${active ? "active" : ""}`}
        >
          {
            data.map(option=> <option key={option}>{ option}</option>)
          }

        </select>
      </div>
      {/* {error && <p>{error}</p>} */}
    </React.Fragment>
  );
};

FormInputSelectOptionGeneral.defaultProps = {
  className: "",
};

FormInputSelectOptionGeneral.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default FormInputSelectOptionGeneral;
