// SubMenuItem.js
import React, { useState } from "react";

const SubMenuItem = ({ label, handleCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    handleCheckboxChange(newCheckedState, label);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      {label}
    </label>
  );
};

export default SubMenuItem;
