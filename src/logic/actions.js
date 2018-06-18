import { PAPER, ROCK, SCISSORS, PlayerOptions } from './logic'
import ai_select from './ai'

export const USER_CHOOSE = 'USER_CHOOSE'
export const TURN_BEGIN = 'TURN_BEGIN'
export const TURN_COMPLETE = 'TURN_COMPLETE'
export const START_GAME = 'START_GAME'
export const END_GAME = 'END_GAME'


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
    ai_selected: PlayerOptions[ai_select()]
  }
}


export function startGame() {
  return {
    type: START_GAME
  }
}


export function endGame() {
  return {
    type: END_GAME
  }
}
