import { NEW_TRACK } from './types'

export function newTrack(data) {
  return {
    type: NEW_TRACK,
    data: data
  };
}
