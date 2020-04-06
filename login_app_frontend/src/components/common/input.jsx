import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <>
      <label htmlFor={name} className="sr-only text-left">
        {label}
      </label>
      <input
        {...rest}
        name={name}
        id={name}
        placeholder={label}
        className="form-control"
        autoComplete="Off"
      />
      {error && (
        <small className="form-text text-danger text-left p-1 mb-1">
          {error}
        </small>
      )}
    </>
  );
};

export default Input;
