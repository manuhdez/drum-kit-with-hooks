import React, { useReducer } from 'react';

import DrumContext from './drum-context';
import { reducer, initialState } from './reducers';
import { togglePower, toggleSoundBank, changeVolume, changeDisplayContent } from './actions/drumActions';

const GlobalState = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DrumContext.Provider
      value={{
        power: state.power,
        soundLibrary: state.soundLibrary,
        volume: state.volume,
        displayContent: state.displayContent,
        togglePower: () => dispatch(togglePower()),
        toggleLibrary: () => dispatch(toggleSoundBank()),
        updateVolume: (value) => dispatch(changeVolume(value)),
        updateDisplayContent: (content) => dispatch(changeDisplayContent(content))
      }}
    >
      {props.children}
    </DrumContext.Provider>
  );
};

export default GlobalState;