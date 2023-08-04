import { useEffect, useState } from "react";

const FillSwitch = ({ checked, onToggle }) => {
  const handleToggle = () => {
    onToggle(!checked);
  };

  return (
    <div className="themeSwitchWrapper" title="Toggle Dark/Light Mode">
      <label className="themeSwitch" htmlFor="checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
          id="checkbox"
        />
        <span className="sliderBar slider round" />
      </label>
    </div>
  );
};

export default FillSwitch;
