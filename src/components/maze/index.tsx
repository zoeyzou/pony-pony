import React, { FC } from 'react'
import { MazeSize, Maze as MazeData } from 'types/maze'

import * as s from './maze.styles'
import * as helpers from './utils/helpers'
import { MazeCell } from './components/maze-cell'

export interface Props {
  data: MazeData
  size?: MazeSize
}

export const Maze: FC<Props> = ({ data, size = [15, 15] }) => {
  return (
    <s.Maze size={size}>
      {data.map((cell, index) => (
        <MazeCell key={index} walls={helpers.getCellWalls(cell, index, size)}>
          {index}
        </MazeCell>
      ))}
    </s.Maze>
  )
}
