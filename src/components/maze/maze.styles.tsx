import styled, { css } from 'styled-components/macro'

import { Props } from '.'
import { Props as CellProps } from './components/maze-cell'
import { Direction } from 'types/directions'

export const Maze = styled.div<Pick<Props, 'size'>>`
  display: grid;
  grid-template-columns: ${({ size }) => `repeat(${size![0]}, minmax(10px, 1fr))`};
  grid-template-rows: ${({ size }) => `repeat(${size![1]}, minmax(10px, 1fr))`};

  > *::after {
    content: '';
    padding-bottom: 100%;
    display: block;
  }
`
export const CellWrapper = styled.div<CellProps>`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  margin: -0.25vw;
  border-color: ${({ theme }) => theme.colors.dark['shade-100']};

  ${({ walls }) =>
    walls.includes(Direction.north) &&
    css`
      border-top: 0.5vw solid;
    `}

  ${({ walls }) =>
    walls.includes(Direction.west) &&
    css`
      border-left: 0.5vw solid;
    `}

  ${({ walls }) =>
    walls.includes(Direction.south) &&
    css`
      border-bottom: 0.5vw solid;
    `}

  ${({ walls }) =>
    walls.includes(Direction.east) &&
    css`
      border-right: 0.5vw solid;
    `}
`

export const Cell = styled.div`
  position: absolute;
`
