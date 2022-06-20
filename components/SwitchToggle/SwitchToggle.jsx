import React from "react";
import { Knobs, SwitchWrapper } from "./SwitchToggleStyle";

const SwitchToggle = () => {
  return (
    <SwitchWrapper login="asdads" singup="ثبت نام">
      <div className="button r" id="button-4">
        <input type="checkbox" className="checkbox" />
        <Knobs className="knobs"></Knobs>
        <div className="layer"></div>
      </div>
    </SwitchWrapper>
  );
};

export default SwitchToggle;
