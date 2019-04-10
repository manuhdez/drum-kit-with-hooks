import React, { useEffect, useContext } from 'react';
import DrumContext from '../../../context/drum-context';
import scss from './Display.module.scss';

const display = () => {
  const context = useContext(DrumContext);

  useEffect(() => {
    setTimeout(() => {
      context.updateDisplayContent('');
    }, 3000);
    console.log('display rendered');
  }, []);

  return (
    <div className={scss.display}>
      <p className={scss.display__text}>
        {context.displayContent}
      </p>
    </div>
  );
};

export default display;