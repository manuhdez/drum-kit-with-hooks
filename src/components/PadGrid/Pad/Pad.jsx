import React, { useRef, useContext } from 'react';
import DrumContext from '../../../context/drum-context';
import scss from './Pad.module.scss';

const pad = (props) => {
  const audioRef = useRef();
  const context = useContext(DrumContext);

  const playPadSound = () => {
    if (context.power) {
      audioRef.current.play();
      const audioName = audioRef.current.dataset.sound;
      context.updateDisplayContent(audioName);
    }
  };

  return (
    <div className={scss.pad} onClick={playPadSound} id={props.name} >
      <p className={scss.pad__text}>{props.char}</p>
      <audio src={props.sound} ref={audioRef} data-key={props.code} data-sound={props.name}></audio>
    </div>
  );
};

export default pad;