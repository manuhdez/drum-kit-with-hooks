import React from 'react';
import Display from './Display/Display';
import Switch from './Switch/Switch';
import Slider from './Slider/Slider';

const controls = (props) => {
  return (
    <div className="control__container">
      <Switch text="Power" labels={['on', 'off']} />
      <Display content={props.display} />
      <Slider label="Volume" />
      <Switch text="Sounds" labels={['1', '2']} onChangeSound={props.changeSounds} />
    </div>
  );
};

export default controls;