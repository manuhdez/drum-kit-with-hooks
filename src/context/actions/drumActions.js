import actionTypes from './actionTypes';

export const togglePower = () => {
  return {
    type: actionTypes.TOGGLE_POWER
  }
}

export const toggleSoundBank = () => {
  return {
    type: actionTypes.TOGGLE_SOUNDS
  }
}

export const changeDisplayContent = (updatedContent) => {
  return {
    type: actionTypes.CHANGE_DISPLAY_CONTENT,
    payload: updatedContent,
  }
}

export const changeVolume = (newVolume) => {
  return {
    type: actionTypes.CHANGE_VOLUME,
    payload: newVolume
  }
}

// export const playSound = (audio) => {
//   audio.play();
// }