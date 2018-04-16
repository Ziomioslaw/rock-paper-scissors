import { PAPER, ROCK, SCISSORS, resolve_fight } from './logic'

const
  WIN = [1, 0],
  DRAW = [0, 0],
  LOSE = [0, 1]

it('Draw', () => {
  expect(resolve_fight(ROCK, ROCK)).toEqual(DRAW)
  expect(resolve_fight(PAPER, PAPER)).toEqual(DRAW)
  expect(resolve_fight(SCISSORS, SCISSORS)).toEqual(DRAW)
})

it('Win', () => {
  expect(resolve_fight(PAPER, ROCK)).toEqual(WIN)
  expect(resolve_fight(SCISSORS, PAPER)).toEqual(WIN)
  expect(resolve_fight(ROCK, SCISSORS)).toEqual(WIN)
})

it('Lose', () => {
  expect(resolve_fight(ROCK, PAPER)).toEqual(LOSE)
  expect(resolve_fight(PAPER, SCISSORS)).toEqual(LOSE)
  expect(resolve_fight(SCISSORS, ROCK)).toEqual(LOSE)
})
