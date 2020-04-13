export type Wall = 'north' | 'west'

export type Cell = Wall[]

export type Maze = Cell[]

export type State = 'active'

export enum StateResult {
  created = 'Successfully created',
  moved = 'Move accepted',
  blocked = "Can't walk in there",
}

export type MazeSize = [number, number]

export interface MazeResponse {
  pony: [number]
  domokun: [number]
  'end-point': [number]
  size: MazeSize
  difficulty: number
  data: Maze
  maze_id: string
  'game-state': {
    state: State
    'state-result': StateResult
  }
}
