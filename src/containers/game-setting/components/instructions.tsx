import React from 'react'

import * as s from '../game-setting.styles'

export const Instructions = () => (
  <s.InstructionWrapper>
    <h1>Game Instructions</h1>
    <p>Use &uarr; to move up</p>
    <p>Use &darr; to move down</p>
    <p>Use &larr; to move left</p>
    <p>Use &rarr; to move right</p>
    <p>Win the game by moving pony to the exit</p>
    <p>Don&lsquo;t let Domokun catch your pony!</p>
  </s.InstructionWrapper>
)
