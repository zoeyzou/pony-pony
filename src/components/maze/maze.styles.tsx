import styled, { css } from 'styled-components/macro'

import { Props } from '.'
import { Props as CellProps } from './components/maze-cell'
import { Direction } from 'types/directions'

export const Maze = styled.div<Pick<Props, 'size'>>`
  max-width: 55vw;
  display: grid;
  grid-template-columns: ${({ size }) => `repeat(${size![0]}, minmax(10px, 1fr))`};
  grid-auto-rows: 1fr;

  &::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`

export const CellWrapper = styled.div<CellProps>`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  margin: -0.2vw;
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
