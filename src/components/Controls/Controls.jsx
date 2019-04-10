import React from 'react';
import Display from './Display/Display';
import Switch from './Switch/Switch';
import Slider from './Slider/Slider';
import scss from './Controls.module.scss';

const controls = () => {

  return (
    <div className={scss.controls__container}>
      <Switch type="power" labels={['off', 'on']} />
      <Display />
      <Slider label="Volume" />
      <Switch type="sounds" labels={['1', '2']} />
    </div>
  );
};

export default controls;