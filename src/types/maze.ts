export type Wall = 'north' | 'west'

export type Cell = Wall[]

export type Maze = Cell[]

export type State = 'active' | 'won' | 'over' // placeholder state

export enum StateResult {
  created = 'Successfully created',
  moved = 'Move accepted',
  blocked = "Can't walk in there",
  won = 'You won. Game ended',
  killed = 'You lost. Killed by monster',
}

export type MazeSize = [number, number]

export interface GameState {
  state: State
  'state-result': StateResult
  'hidden-url'?: string
}

export interface MazeResponse {
  pony: [number]
  domokun: [number]
  'end-point': [number]
  size: MazeSize
  difficulty: number
  data: Maze
  maze_id: string
  'game-state': GameState
}
