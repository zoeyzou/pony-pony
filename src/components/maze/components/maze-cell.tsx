import React, { FC } from 'react'
import { Direction } from 'types/directions'
import * as s from '../maze.styles'

export interface Props {
  walls: Direction[]
}

export const MazeCell: FC<Props> = ({ walls, children }) => (
  <s.CellWrapper walls={walls}>
    <s.Cell>{children}</s.Cell>
  </s.CellWrapper>
)
