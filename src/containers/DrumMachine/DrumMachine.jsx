import React from "react";
import PadGrid from "../../components/PadGrid/PadGrid";
import Controls from "../../components/Controls/Controls";
import scss from "./DrumMachine.module.scss";

const drumMachine = () => {
  return (
    <div className={scss.container}>
      <Controls />
      <PadGrid />
    </div>
  );
};

export default drumMachine;
