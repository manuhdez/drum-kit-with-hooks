import React from 'react';
import GlobalState from '../../context/GlobalState';
import DrumMachine from '../DrumMachine/DrumMachine';
import scss from './App.module.scss';

const app = () => {
  return (
    <GlobalState>
      <div className={scss.app}>
        <DrumMachine />
      </div>
    </GlobalState>
  );
};

export default app;
