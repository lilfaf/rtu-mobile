import * as actionTypes from './types'

export function changeVolume(value) {
  return {
    type: actionTypes.SET_VOLUME,
    value: value
  };
}

export function changePlaybackState() {
  return { type: actionTypes.TOGGLE_PLAYBACK };
}

export function playStream() {
  return { type: actionTypes.PLAY };
}

export function pauseStream() {
  return { type: actionTypes.PAUSE };
}
