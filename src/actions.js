export const USER_CHOOSE = 'USER_CHOOSE'

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
