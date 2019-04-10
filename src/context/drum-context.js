import React from 'react';

export default React.createContext({
  power: false,
  soundLibrary: false,
  volume: 35,
  displayContent: 'welcome back',
  togglePower: () => {},
  toggleLibrary: () => {},
  updateVolume: () => {},
  updateDisplayContent: () => {}
});
