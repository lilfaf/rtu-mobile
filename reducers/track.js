import { NEW_TRACK } from '../actions/types'

const initialTrackState = {};

export default function track(state = initialTrackState, action) {
  switch (action.type) {
    case NEW_TRACK:
      return action.data;
    default:
      return state;
  }
}
