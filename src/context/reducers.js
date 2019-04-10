import actionTypes from './actions/actionTypes';

export const initialState = {
  power: false,
  soundLibrary: false,
  volume: 35,
  displayContent: 'welcome',
  togglePower: () => {},
  toggleLibrary: () => {},
  updateVolume: () => {},
  updateDisplayContent: () => {}
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.TOGGLE_POWER:
      return {
        ...state,
        power: !state.power,
      };
    case actionTypes.TOGGLE_SOUNDS:
      return {
        ...state,
        soundLibrary: !state.soundLibrary,
      };
    case actionTypes.CHANGE_DISPLAY_CONTENT:
      return {
        ...state,
        displayContent: payload,
      }
    case actionTypes.CHANGE_VOLUME:
      return {
        ...state,
        volume: payload,
      }
    default:
      return state;
  }
};