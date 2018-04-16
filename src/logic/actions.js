import { PAPER, ROCK, SCISSORS, PlayerOptions } from './logic'
import ai_select from './ai'

export const USER_CHOOSE = 'USER_CHOOSE'
export const TURN_BEGIN = 'TURN_BEGIN'


export function chooseRock() {
  return {
    type: USER_CHOOSE,
    value: ROCK
  }
}


export function choosePaper() {
  return {
    type: USER_CHOOSE,
    value: PAPER
  }
}


export function chooseScissors() {
  return {
    type: USER_CHOOSE,
    value: SCISSORS
  }
}


export function turnBegin() {
  return {
    type: TURN_BEGIN,
    ai_select: PlayerOptions[ai_select()]
  }
}
