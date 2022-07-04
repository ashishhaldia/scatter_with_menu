import React from "react";
import { useState } from "react";

const DropDown = ({ options, onSelectedXValueChange }) => {
  console.log(options);
  return (
    <div>
      <label>Choose X :</label>

      <select
        className="form-select form-select-sm"
        name="pets"
        id="pet-select"
        onChange={(event) => onSelectedXValueChange(event.target.value)}
      >
        <option value="">--Please choose an option--</option>
        {options.map((d, i) => (
          <option key={i} value={d.label}>
            {d.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
