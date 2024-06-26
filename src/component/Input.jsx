import React from "react";

const Input = ({ label, type, id, name, value, onChange, error }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${name}`}
        autoComplete="off"
      />
      <span className="error-message">{error}</span>
    </div>
  );
};

export default Input;
