import React, { useState, useContext, useEffect } from 'react';
import DrumContext from '../../../context/drum-context';
import scss from './Switch.module.scss';

const Switch = (props) => {
  const positions = {on: '25px', off: '0px'};
  const [buttonPosition, setButtonPosition] = useState(positions.off);
  const context = useContext(DrumContext);

  useEffect(() => {
    const { on, off } = positions;
    switch (props.type) {
      case 'power':
        setButtonPosition(positions[context.power ? on : off]);
        break;
      case 'sounds':
        setButtonPosition(positions[context.soundLibrary ? on: off]);
        break;
      default:
        return;
    }
  }, []);

  const handleClick = () => {
    const { on, off } = positions;
    switch (props.type) {
      case 'power':
        context.togglePower();
        context.updateDisplayContent(context.power ? 'OFF' : 'ON');
        setButtonPosition(!context.power ? on : off);
        break;
      case 'sounds':
        context.toggleLibrary();
        context.updateDisplayContent(!context.soundLibrary ? "Sounds bankTwo" : "Sounds bankOne");
        setButtonPosition(!context.soundLibrary ? on : off);
        break;
      default:
        break;
    }
  };

  return (
    <div className={scss.main__container}>
      <label className={scss.switch__title}>{props.type}</label>
      <div className={scss.touch__area}>
      <label className={scss.label_left}>{props.labels[0]}</label>
      <div className={scss.switch__container} onClick={() => handleClick()}>
        <div className={scss.switch__button} style={{marginLeft: buttonPosition}} ></div>
      </div>
      <label className={scss.label_right}>{props.labels[1]}</label>
      </div>
    </div>
  );
};

export default Switch;