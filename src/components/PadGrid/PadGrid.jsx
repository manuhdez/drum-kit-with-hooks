import React from "react";
import Pad from "./Pad/Pad";
import { generateRandomId } from '../../helpers/utility';

const padGrid = props => {
  return (
    <div>
      {props.sounds.map(sound => (
        <Pad key={generateRandomId()} code={sound.keyCode} char={sound.keyTrigger} name={sound.id} sound={sound.url} />
      ))}
    </div>
  );
};

export default padGrid;
