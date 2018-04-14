export const USER_CHOOSE = 'USER_CHOOSE'
export const TURN_BEGIN = 'TURN_BEGIN'

export function chooseRock() {
  return {
    type: USER_CHOOSE,
    value: 'rock'
  }
}

export function choosePaper() {
  return {
    type: USER_CHOOSE,
    value: 'paper'
  }
}

export function chooseScissors() {
  return {
    type: USER_CHOOSE,
    value: 'scissors'
  }
}

const game_values = ['rock', 'paper', 'scissors']

export function turnBegin() {
  const ai_select = Math.floor((Math.random() * 3))

  return {
    type: TURN_BEGIN,
    ai_select: game_values[ai_select]
  }
}
