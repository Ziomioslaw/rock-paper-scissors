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
      if (two === PAPER)
        return [0, 1]
      else
        return [1, 0]

    case PAPER:
      if (two === SCISSORS)
        return [0, 1]
      else
        return [1, 0]

    case SCISSORS:
      if (two === ROCK)
        return [0, 1]
      else
        return [1, 0]

    default:
      throw Error(`Unknown value: "${one}"`)
  }
}
