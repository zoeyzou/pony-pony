import { State, Maze } from 'types/maze'
import { Pony } from 'types/pony'

export type GameStatus = State | 'preparing'
export type FetchingKey = 'game' | 'movement'
export type FetchingState = 'pending' | 'error' | 'finish'

export interface GameState {
  gameId: string | null
  gameStatus: GameStatus
  mazeData: Maze
  ponyPos: number | null
  domokunPos: number | null
  exit: number | null
  fetchingState: { [key in FetchingKey]: FetchingState }
  hiddenUrl?: string
}

export interface GameRequestBody {
  width: number
  height: number
  difficulty: number
  pony: Pony
}

export interface GameIdResponse {
  maze_id: string
}
