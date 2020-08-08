import React from "react";
// use ... spread operator to replace attributes like value={value}
const Input = ({ name, label, focus, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        id={name}
        name={name}
        autoFocus={focus}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
