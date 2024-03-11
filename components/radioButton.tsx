import React from "react";

const RadioButton = ({ name, id, value, onChange, checked, text }: any) => (
  <label htmlFor={id}>
    <input
      type="radio"
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      checked={checked}
    />
    {text}
  </label>
);

export default RadioButton;
