import React from "react";
import { SwitchWrapper } from "./SwitchToggleStyle";

const SwitchToggle = () => {
  return (
    <SwitchWrapper>
      <div className="button r" id="button-4">
        <input type="checkbox" className="checkbox" />
        <div className="knobs"></div>
        <div className="layer"></div>
      </div>
    </SwitchWrapper>
  );
};

export default SwitchToggle;
