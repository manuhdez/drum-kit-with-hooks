import React, { useContext, useState } from 'react';
import DrumContext from '../../../context/drum-context';
import scss from './Slider.module.scss';

const slider = (props) => {
  const context = useContext(DrumContext);
  const [value, setValue] = useState(context.volume);

  const emitStateChange = (newValue) => {
    context.updateVolume(newValue);
    context.updateDisplayContent(`volume: ${newValue}`);
  };

  return (
    <div className={scss.slider__container}>
      <label className={scss.slider__label}>{props.label}</label>
      <input
        type="range"
        className={scss.slider}
        name={props.name}
        id={props.name}
        min={props.min}
        max={props.max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onMouseUp={(e) => emitStateChange(e.target.value)}
      />
    </div>
  );
};

export default slider;