import React from 'react'
import { Maze } from '.'

export default {
  title: 'Components/Maze',
  component: Maze,
}

const defaultProps: React.ComponentProps<typeof Maze> = {
  data: [
    ['west', 'north'],
    ['north'],
    ['west', 'north'],
    ['north'],
    ['north'],
    ['north'],
    ['north'],
    ['north'],
    ['north'],
    ['north'],
    ['north'],
    ['west', 'north'],
    ['north'],
    ['north'],
    ['north'],
    ['west', 'north'],
    [],
    ['west'],
    ['west', 'north'],
    ['north'],
    ['north'],
    ['west'],
    ['west', 'north'],
    ['north'],
    ['north'],
    ['west'],
    [],
    ['west'],
    ['west', 'north'],
    ['west'],
    ['west'],
    ['west', 'north'],
    [],
    ['west'],
    ['west', 'north'],
    [],
    ['north'],
    ['west'],
    ['west', 'north'],
    ['west'],
    ['west'],
    ['west', 'north'],
    [],
    ['west'],
    [],
    ['west'],
    ['west', 'north'],
    ['north'],
    ['west'],
    ['north'],
    ['north'],
    ['west'],
    [],
    ['west'],
    ['west'],
    ['north'],
    ['west'],
    ['north'],
    ['west'],
    ['north'],
    ['west'],
    [],
    ['west'],
    ['west'],
    ['north'],
    ['west'],
    ['west', 'north'],
    ['north'],
    ['west'],
    ['north'],
    ['west'],
    ['north'],
    [],
    ['west', 'north'],
    [],
    ['west', 'north'],
    ['west', 'north'],
    [],
    ['west', 'north'],
    [],
    ['west'],
    [],
    ['west'],
    ['west'],
    ['north'],
    ['north'],
    ['north'],
    ['north'],
    ['west'],
    ['north'],
    ['west'],
    ['west'],
    ['north'],
    ['north'],
    ['north'],
    ['west', 'north'],
    ['north'],
    [],
    ['west'],
    ['west'],
    ['north'],
    ['north'],
    ['north'],
    ['north'],
    ['west'],
    ['west'],
    ['north'],
    ['north'],
    ['north'],
    ['west'],
    [],
    ['west', 'north'],
    ['west', 'north'],
    [],
    ['west', 'north'],
    ['north'],
    ['north'],
    ['north'],
    ['west'],
    ['west'],
    ['west'],
    ['west', 'north'],
    [],
    ['west', 'north'],
    ['north'],
    ['north'],
    [],
    ['west'],
    ['west', 'north'],
    [],
    ['north'],
    ['west', 'north'],
    ['west'],
    ['west'],
    [],
    ['west'],
    ['west'],
    ['north'],
    [],
    ['west', 'north'],
    ['west', 'north'],
    [],
    ['west'],
    ['north'],
    ['north'],
    [],
    ['west'],
    ['west'],
    ['west', 'north'],
    ['north'],
    ['west'],
    ['north'],
    ['north'],
    ['west', 'north'],
    [],
    ['west'],
    ['west'],
    ['north'],
    ['west', 'north'],
    ['north'],
    ['north'],
    ['west'],
    [],
    ['west'],
    ['west'],
    ['west', 'north'],
    ['north'],
    ['west'],
    ['north'],
    ['west'],
    ['west'],
    ['west', 'north'],
    [],
    [],
    ['west', 'north'],
    [],
    ['west'],
    ['north'],
    ['north'],
    [],
    ['west'],
    ['west', 'north'],
    ['north'],
    ['west'],
    [],
    ['west'],
    ['north'],
    ['west', 'north'],
    ['north'],
    ['west'],
    ['north'],
    ['west', 'north'],
    ['north'],
    ['north'],
    ['west'],
    ['west'],
    [],
    ['west'],
    ['north'],
    ['west'],
    ['west', 'north'],
    ['west'],
    ['west'],
    ['west'],
    ['west', 'north'],
    [],
    [],
    ['west', 'north'],
    ['north'],
    ['west'],
    ['west'],
    ['north'],
    ['north'],
    ['west'],
    [],
    [],
    ['west'],
    [],
    ['west'],
    ['north'],
    ['north'],
    ['north'],
    [],
    ['west'],
    [],
  ],
  endPointPos: 143,
  ponyStartingPos: 57,
  domokunStartingPos: 31,
}

export const Default = () => <Maze {...defaultProps} />