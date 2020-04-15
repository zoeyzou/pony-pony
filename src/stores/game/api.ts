import { MazeResponse, GameState } from 'types/maze'
import { request } from 'utils/request'
import { GameRequestBody, GameIdResponse } from './types'
import { Direction } from 'types/directions'

const BASE_URL = 'https://ponychallenge.trustpilot.com/pony-challenge/maze'

export function getGameId({
  width,
  height,
  difficulty,
  pony,
}: GameRequestBody): Promise<GameIdResponse> {
  return request(BASE_URL, {
    method: 'POST',
    query: {
      'maze-width': width,
      'maze-height': height,
      'maze-player-name': pony,
      difficulty,
    },
  })
}

export function loadGame(id: string): Promise<MazeResponse> {
  return request(`${BASE_URL}/${id}`)
}

export function movePony(id: string, direction: Direction): Promise<GameState> {
  return request(`${BASE_URL}/${id}`, {
    method: 'POST',
    query: {
      direction,
    },
  })
}
