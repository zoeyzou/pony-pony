import { Direction } from 'types/directions'

export function getDirectionByKey(key: string): Direction | null {
  if (key === 'ArrowUp') {
    return Direction.north
  }

  if (key === 'ArrowDown') {
    return Direction.south
  }

  if (key === 'ArrowLeft') {
    return Direction.west
  }

  if (key === 'ArrowRight') {
    return Direction.east
  }

  return null
}
