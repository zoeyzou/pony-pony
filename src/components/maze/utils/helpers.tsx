import { MazeSize, Cell } from 'types/maze'
import { Direction } from 'types/directions'

export function isMazeWall(index: number, size: MazeSize): Direction[] | null {
  const width = size[0]
  const height = size[1]
  const directions = []

  if (index < width) {
    directions.push(Direction.north)
  }

  if (index >= width * (height - 1)) {
    directions.push(Direction.south)
  }

  if (index % width === 0) {
    directions.push(Direction.west)
  }

  if (index % width === width - 1) {
    directions.push(Direction.east)
  }

  return directions.length > 0 ? directions : null
}

export function getCellWalls(data: Cell, index: number, size: MazeSize): Direction[] {
  let directions: Direction[] = []
  if (data.includes('north')) {
    directions.push(Direction.north)
  }

  if (data.includes('west')) {
    directions.push(Direction.west)
  }

  const isWalls = isMazeWall(index, size)

  if (isWalls) {
    directions = [...directions, ...isWalls]
  }

  return directions
}
