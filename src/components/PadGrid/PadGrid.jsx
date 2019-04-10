import React, { useEffect, useContext } from "react";
import Pad from "./Pad/Pad";
import DrumContext from '../../context/drum-context';
import { generateRandomId } from '../../helpers/utility';
import sounds from '../../sounds.json';
import scss from './PadGrid.module.scss';

const padGrid = () => {
  const context = useContext(DrumContext);

  useEffect(() => {
    if (context.power) {
      document.addEventListener("keydown", (event) => handleKeyPress(event));
      console.log('listener added');
    } else {
      document.removeEventListener("keydown", (event) => handleKeyPress(event));
      document.removeEventListener("keydown", (event) => handleKeyPress(event));
      console.log('listener removed');
    }
  }, [context.power]);

  const handleKeyPress = (event) => {
    console.log('key event, power', context.power);
    if (context.power) {
      const audioTag = event.target.querySelector(`audio[data-key="${event.keyCode}"]`);
      if (audioTag) {
        audioTag.currentTime = 0;
        audioTag.play();
      }
    }
  };

  return (
    <div className={scss.padgrid}>
      {sounds[context.soundLibrary ? 'bankTwo' : 'bankOne'].map((sound) => (
        <Pad
          key={generateRandomId()}
          code={sound.keyCode}
          char={sound.keyTrigger}
          name={sound.id}
          sound={sound.url}
        />
      ))}
    </div>
  );
};

export default padGrid;
