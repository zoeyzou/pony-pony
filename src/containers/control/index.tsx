import React, { FC } from 'react'

import { Button } from 'components/button'

import * as s from './control.styles'
import { useSelector, useDispatch } from 'react-redux'
import { selectHasStarted } from 'stores/game/selectors'
import { resetGame, getGameThunk } from 'stores/game/slice'
import { selectSettings } from 'stores/settings/selectors'

export const Control: FC = () => {
  const { width, height, difficultyLevel, currentPony } = useSelector(selectSettings)
  const hasStarted = useSelector(selectHasStarted)
  const dispatch = useDispatch()

  const startGame = () =>
    currentPony
      ? dispatch(getGameThunk({ width, height, difficulty: difficultyLevel, pony: currentPony }))
      : undefined

  return (
    <s.ControlWrapper>
      {hasStarted && <Button onClick={() => dispatch(resetGame())}>Reset Game</Button>}
      {!hasStarted && (
        <Button onClick={startGame} disabled={!currentPony}>
          Start Game
        </Button>
      )}
    </s.ControlWrapper>
  )
}
