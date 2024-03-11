import React, { useState } from "react";
import RadioButton from "./radioButton";

const RadioGroup = ({ name, options, value, onChange }: any) => {
  const [selectedValue, setSelectedValue] = useState(value || ""); // Initial selected value

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
    onChange(event.target.value); // Call the passed onChange function
  };

  return (
    <div>
      {options.map((option: any) => (
        <RadioButton
          key={option.value}
          name={name}
          id={option.value}
          value={option.value}
          onChange={handleChange}
          checked={selectedValue === option.value}
          text={option.text}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
