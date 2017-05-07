import * as actionTypes from '../actions/types'

const initialPlayerState = {
  volume: 100,
  icon: 'play_arrow',
  playing: false
};

export default function player(state = initialPlayerState, action = {}) {
  switch (action.type) {
    case actionTypes.PLAY:
      return Object.assign({}, state, {
        icon: 'pause',
        playing: true
      });
    case actionTypes.PAUSE:
      return Object.assign({}, state, {
        icon: 'play_arrow',
        playing: false
      })
    case actionTypes.SET_VOLUME:
      return Object.assign({}, state, {
        volume: action.value
      });
    default:
      return state;
  }
}
