import React, { FC } from 'react'
import { MazeSize, Maze as MazeData } from 'types/maze'

import * as s from './maze.styles'
import * as helpers from './utils/helpers'
import { MazeCell } from './components/maze-cell'

export interface Props {
  data: MazeData
  size?: MazeSize
  endPointPos: number
  ponyStartingPos: number
  domokunStartingPos: number
}

export const Maze: FC<Props> = ({
  data,
  size = [15, 15],
  endPointPos,
  ponyStartingPos,
  domokunStartingPos,
}) => {
  return (
    <s.Maze size={size}>
      {data.map((cell, index) => (
        <MazeCell key={index} walls={helpers.getCellWalls(cell, index, size)}>
          {endPointPos === index && 'E'}
          {ponyStartingPos === index && 'P'}
          {domokunStartingPos === index && 'D'}
        </MazeCell>
      ))}
    </s.Maze>
  )
}
