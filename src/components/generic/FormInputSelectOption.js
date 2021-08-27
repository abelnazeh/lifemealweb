import React from "react";
import PropTypes from "prop-types";
const FormInputSelectOption = ({
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
            data.map(option=> <option key={option.name}>{ option.name}</option>)
          }

        </select>
      </div>

    </React.Fragment>
  );
};

FormInputSelectOption.defaultProps = {
  className: "",
};

FormInputSelectOption.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default FormInputSelectOption;
