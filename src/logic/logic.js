export const PAPER = 'paper'
export const ROCK = 'rock'
export const SCISSORS = 'scissors'

export const PlayerOptions = [PAPER, ROCK, SCISSORS]


export function resolve_fight(one, two) {
  if (one === two) {
    return [0, 0]
  }

  switch (one) {
    case ROCK:
      return (two === PAPER) ? [0, 1] : [1, 0]

    case PAPER:
      return (two === SCISSORS) ? [0, 1] : [1, 0]

    case SCISSORS:
      return (two === ROCK) ? [0, 1] : [1, 0]

    default:
      throw Error(`Unknown value: "${one}"`)
  }
}
