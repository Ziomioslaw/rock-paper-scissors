import { PlayerOptions } from './logic'

export default function ai_select() {
  return Math.floor((Math.random() * PlayerOptions.length))
}
